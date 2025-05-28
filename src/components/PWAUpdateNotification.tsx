import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePWA } from '@/hooks/usePWA';

interface PWAUpdateNotificationProps {
  className?: string;
}

export const PWAUpdateNotification: React.FC<PWAUpdateNotificationProps> = ({ 
  className = '' 
}) => {
  const { isUpdateAvailable, needsUpdate, updateApp, dismissUpdate } = usePWA();

  const handleUpdate = async () => {
    try {
      await updateApp();
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  const showNotification = isUpdateAvailable || needsUpdate;

  return (
    <AnimatePresence>
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`fixed top-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 ${className}`}
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-5 backdrop-blur-lg">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-lg">
                    system_update
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Update Available
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    New features and improvements
                  </p>
                </div>
              </div>
              <button
                onClick={dismissUpdate}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Dismiss update notification"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* Content */}
            <div className="mb-5">
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                A new version of the portfolio is available with performance improvements 
                and bug fixes. Update now for the best experience.
              </p>
              
              <div className="mt-3 flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400">
                <span className="material-symbols-outlined text-sm text-blue-500">info</span>
                <span>The update will be applied after refresh</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-3">
              <button
                onClick={handleUpdate}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-2.5 px-4 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span className="material-symbols-outlined text-sm">refresh</span>
                <span>Update Now</span>
              </button>
              <button
                onClick={dismissUpdate}
                className="px-4 py-2.5 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors text-sm font-medium"
              >
                Later
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Compact update badge for navigation
export const PWAUpdateBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { isUpdateAvailable, needsUpdate, updateApp } = usePWA();

  const showBadge = isUpdateAvailable || needsUpdate;

  if (!showBadge) {
    return null;
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      onClick={updateApp}
      className={`relative inline-flex items-center space-x-1 px-3 py-1.5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors text-xs font-medium ${className}`}
      aria-label="Update available"
    >
      <span className="material-symbols-outlined text-sm">system_update</span>
      <span className="hidden sm:inline">Update</span>
      
      {/* Pulse animation */}
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
    </motion.button>
  );
};

// Connection status indicator
export const ConnectionStatus: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { isOnline } = usePWA();

  return (
    <AnimatePresence>
      {!isOnline && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-0 left-0 right-0 bg-orange-500 text-white text-center py-2 text-sm font-medium z-50 ${className}`}
        >
          <div className="flex items-center justify-center space-x-2">
            <span className="material-symbols-outlined text-sm">wifi_off</span>
            <span>You're offline. Some features may be limited.</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
