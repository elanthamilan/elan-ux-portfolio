import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePWA } from '@/hooks/usePWA';

interface PWAInstallPromptProps {
  className?: string;
}

export const PWAInstallPrompt: React.FC<PWAInstallPromptProps> = ({ className = '' }) => {
  const { isInstallable, isInstalled, installApp } = usePWA();
  const [isDismissed, setIsDismissed] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if user has previously dismissed the prompt
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    if (dismissed) {
      setIsDismissed(true);
    }

    // Show prompt after a delay if installable and not dismissed
    if (isInstallable && !isDismissed && !isInstalled) {
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 3000); // Show after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isInstallable, isDismissed, isInstalled]);

  const handleInstall = async () => {
    try {
      await installApp();
      setShowPrompt(false);
    } catch (error) {
      console.error('Installation failed:', error);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setIsDismissed(true);
    localStorage.setItem('pwa-install-dismissed', 'true');
  };

  const handleRemindLater = () => {
    setShowPrompt(false);
    // Set a temporary dismissal that expires after 24 hours
    const expiryTime = Date.now() + (24 * 60 * 60 * 1000);
    localStorage.setItem('pwa-install-remind-later', expiryTime.toString());
  };

  // Don't show if not installable, already installed, or dismissed
  if (!isInstallable || isInstalled || isDismissed || !showPrompt) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50 ${className}`}
      >
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 backdrop-blur-lg">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-xl">
                  install_mobile
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                  Install App
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Get the full experience
                </p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Dismiss install prompt"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Content */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Install Elanthamilan's UX Portfolio for quick access, offline browsing, 
              and a native app experience on your device.
            </p>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400">
                <span className="material-symbols-outlined text-sm text-green-500">check_circle</span>
                <span>Works offline</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400">
                <span className="material-symbols-outlined text-sm text-green-500">check_circle</span>
                <span>Fast loading</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400">
                <span className="material-symbols-outlined text-sm text-green-500">check_circle</span>
                <span>Native app feel</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            <button
              onClick={handleInstall}
              className="flex-1 bg-gradient-to-r from-primary to-secondary text-white font-medium py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              <span>Install</span>
            </button>
            <button
              onClick={handleRemindLater}
              className="px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors text-sm font-medium"
            >
              Later
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// Floating install button for header/navigation
export const PWAInstallButton: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { isInstallable, isInstalled, installApp } = usePWA();

  if (!isInstallable || isInstalled) {
    return null;
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      onClick={installApp}
      className={`inline-flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors text-sm font-medium ${className}`}
      aria-label="Install app"
    >
      <span className="material-symbols-outlined text-sm">install_mobile</span>
      <span className="hidden sm:inline">Install App</span>
    </motion.button>
  );
};
