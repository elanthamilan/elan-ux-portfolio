import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

interface PWAState {
  isInstallable: boolean;
  isInstalled: boolean;
  isOnline: boolean;
  needsUpdate: boolean;
  isUpdateAvailable: boolean;
}

interface PWAActions {
  installApp: () => Promise<void>;
  updateApp: () => Promise<void>;
  dismissUpdate: () => void;
}

export function usePWA(): PWAState & PWAActions {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [needsUpdate, setNeedsUpdate] = useState(false);
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    const checkInstalled = () => {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
      const isInWebAppiOS = (window.navigator as any).standalone === true;
      setIsInstalled(isStandalone || isInWebAppiOS);
    };

    checkInstalled();

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(promptEvent);
      setIsInstallable(true);
    };

    // Listen for app installed event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };

    // Listen for online/offline events
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Add event listeners
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Enhanced Service Worker update detection for Vite PWA
    if ('serviceWorker' in navigator) {
      let refreshing = false;

      // Listen for service worker controller changes
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshing) return;
        console.log('Service worker controller changed, reloading page');
        refreshing = true;
        window.location.reload();
      });

      // Setup service worker update detection
      const setupServiceWorkerUpdates = async () => {
        try {
          const registration = await navigator.serviceWorker.getRegistration();
          if (registration) {
            console.log('Service worker registration found');

            // Check if there's already a waiting service worker
            if (registration.waiting) {
              console.log('Service worker waiting found');
              setIsUpdateAvailable(true);
            }

            // Listen for new service worker installing
            registration.addEventListener('updatefound', () => {
              console.log('Service worker update found');
              const newWorker = registration.installing;
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  console.log('New service worker state:', newWorker.state);
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    console.log('New service worker installed, update available');
                    setIsUpdateAvailable(true);
                    setNeedsUpdate(true);
                  }
                });
              }
            });

            // Periodically check for updates
            const checkForUpdates = async () => {
              try {
                console.log('Checking for service worker updates...');
                await registration.update();
              } catch (error) {
                console.log('Service worker update check failed:', error);
              }
            };

            // Check for updates every 5 minutes
            const updateInterval = setInterval(checkForUpdates, 5 * 60 * 1000);

            // Initial check after 10 seconds
            setTimeout(checkForUpdates, 10000);

            return () => {
              clearInterval(updateInterval);
            };
          }
        } catch (error) {
          console.log('Service worker setup failed:', error);
        }
      };

      setupServiceWorkerUpdates();
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const installApp = async (): Promise<void> => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;

      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }

      setDeferredPrompt(null);
      setIsInstallable(false);
    } catch (error) {
      console.error('Error during app installation:', error);
    }
  };

  const updateApp = async (): Promise<void> => {
    try {
      console.log('Attempting to update app...');
      const registration = await navigator.serviceWorker.getRegistration();

      if (registration?.waiting) {
        console.log('Activating waiting service worker');
        // Tell the waiting service worker to skip waiting and become active
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });

        // Clear update states
        setNeedsUpdate(false);
        setIsUpdateAvailable(false);

        // The controllerchange event will handle the reload
      } else if (registration) {
        console.log('No waiting service worker, checking for updates');
        // Force check for updates
        await registration.update();

        // If still no waiting worker, just reload to be safe
        setTimeout(() => {
          if (!registration.waiting) {
            console.log('No updates found, reloading anyway');
            window.location.reload();
          }
        }, 1000);
      } else {
        console.log('No service worker registration found, reloading');
        window.location.reload();
      }
    } catch (error) {
      console.error('Error during app update:', error);
      // Fallback: just reload the page
      window.location.reload();
    }
  };

  const dismissUpdate = (): void => {
    setIsUpdateAvailable(false);
  };

  return {
    isInstallable,
    isInstalled,
    isOnline,
    needsUpdate,
    isUpdateAvailable,
    installApp,
    updateApp,
    dismissUpdate,
  };
}
