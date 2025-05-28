import React, { useState, useEffect } from 'react';
import { usePWA } from '../../hooks/usePWA';

const PWATestPage: React.FC = () => {
  const {
    isInstallable,
    isInstalled,
    isUpdateAvailable,
    needsUpdate,
    isOnline,
    showInstallPrompt,
    updateApp,
    dismissUpdate
  } = usePWA();

  const [logs, setLogs] = useState<string[]>([]);
  const [serviceWorkerInfo, setServiceWorkerInfo] = useState<any>(null);

  // Add log entry
  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [`[${timestamp}] ${message}`, ...prev.slice(0, 19)]);
  };

  // Check service worker status
  const checkServiceWorkerStatus = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
          const info = {
            active: !!registration.active,
            installing: !!registration.installing,
            waiting: !!registration.waiting,
            scope: registration.scope,
            updateViaCache: registration.updateViaCache,
          };
          setServiceWorkerInfo(info);
          addLog(`Service Worker Status: ${JSON.stringify(info)}`);
        } else {
          addLog('No service worker registration found');
        }
      } catch (error) {
        addLog(`Error checking service worker: ${error}`);
      }
    } else {
      addLog('Service workers not supported');
    }
  };

  // Force update check
  const forceUpdateCheck = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
          addLog('Forcing service worker update check...');
          await registration.update();
          addLog('Update check completed');
        }
      } catch (error) {
        addLog(`Update check failed: ${error}`);
      }
    }
  };

  // Simulate going offline
  const simulateOffline = () => {
    addLog('Simulating offline mode...');
    // This will trigger the offline page
    window.location.href = '/non-existent-page-to-trigger-offline';
  };

  useEffect(() => {
    addLog('PWA Test Page loaded');
    checkServiceWorkerStatus();
  }, []);

  useEffect(() => {
    addLog(`PWA State Update - Installable: ${isInstallable}, Installed: ${isInstalled}, Update Available: ${isUpdateAvailable}, Needs Update: ${needsUpdate}, Online: ${isOnline}`);
  }, [isInstallable, isInstalled, isUpdateAvailable, needsUpdate, isOnline]);

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">PWA Testing Dashboard</h1>

        {/* PWA Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <h3 className="font-semibold mb-2">Installation Status</h3>
            <div className="space-y-1 text-sm">
              <div>Installable: <span className={isInstallable ? 'text-green-600' : 'text-red-600'}>{isInstallable ? 'Yes' : 'No'}</span></div>
              <div>Installed: <span className={isInstalled ? 'text-green-600' : 'text-red-600'}>{isInstalled ? 'Yes' : 'No'}</span></div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <h3 className="font-semibold mb-2">Update Status</h3>
            <div className="space-y-1 text-sm">
              <div>Update Available: <span className={isUpdateAvailable ? 'text-orange-600' : 'text-green-600'}>{isUpdateAvailable ? 'Yes' : 'No'}</span></div>
              <div>Needs Update: <span className={needsUpdate ? 'text-orange-600' : 'text-green-600'}>{needsUpdate ? 'Yes' : 'No'}</span></div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <h3 className="font-semibold mb-2">Connection Status</h3>
            <div className="space-y-1 text-sm">
              <div>Online: <span className={isOnline ? 'text-green-600' : 'text-red-600'}>{isOnline ? 'Yes' : 'No'}</span></div>
            </div>
          </div>
        </div>

        {/* Service Worker Info */}
        {serviceWorkerInfo && (
          <div className="bg-white p-4 rounded-lg border shadow-sm mb-6">
            <h3 className="font-semibold mb-2">Service Worker Info</h3>
            <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
              {JSON.stringify(serviceWorkerInfo, null, 2)}
            </pre>
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <button
            onClick={showInstallPrompt}
            disabled={!isInstallable}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
          >
            Install App
          </button>

          <button
            onClick={updateApp}
            disabled={!isUpdateAvailable && !needsUpdate}
            className="bg-green-500 text-white px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-green-600 transition-colors"
          >
            Update App
          </button>

          <button
            onClick={forceUpdateCheck}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
          >
            Check Updates
          </button>

          <button
            onClick={simulateOffline}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Test Offline
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <button
            onClick={checkServiceWorkerStatus}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors"
          >
            Check SW Status
          </button>

          <button
            onClick={dismissUpdate}
            disabled={!isUpdateAvailable}
            className="bg-gray-500 text-white px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
          >
            Dismiss Update
          </button>
        </div>

        {/* Logs */}
        <div className="bg-white p-4 rounded-lg border shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Activity Logs</h3>
            <button
              onClick={() => setLogs([])}
              className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition-colors"
            >
              Clear Logs
            </button>
          </div>
          <div className="bg-gray-50 p-3 rounded max-h-64 overflow-y-auto">
            {logs.length === 0 ? (
              <p className="text-gray-500 text-sm">No logs yet...</p>
            ) : (
              <div className="space-y-1">
                {logs.map((log, index) => (
                  <div key={index} className="text-xs font-mono text-gray-700">
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
          <h3 className="font-semibold text-blue-800 mb-2">Testing Instructions</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Use "Check Updates" to manually trigger update detection</li>
            <li>• Deploy a new version and wait for update notification to appear</li>
            <li>• Use "Test Offline" to see the themed offline page</li>
            <li>• Install the app to test PWA functionality</li>
            <li>• Monitor the logs for detailed PWA activity</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PWATestPage;
