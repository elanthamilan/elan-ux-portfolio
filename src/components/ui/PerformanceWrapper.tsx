
import React, { Suspense, lazy, ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface PerformanceWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  errorFallback?: ReactNode;
}

const DefaultFallback = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const DefaultErrorFallback = ({ error, resetErrorBoundary }: any) => (
  <div className="p-8 text-center">
    <h2 className="text-lg font-semibold text-destructive mb-2">Something went wrong</h2>
    <p className="text-muted-foreground mb-4">
      {error?.message || 'An unexpected error occurred'}
    </p>
    <button
      onClick={resetErrorBoundary}
      className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
    >
      Try again
    </button>
  </div>
);

const PerformanceWrapper: React.FC<PerformanceWrapperProps> = ({
  children,
  fallback = <DefaultFallback />,
  errorFallback
}) => {
  return (
    <ErrorBoundary
      FallbackComponent={errorFallback || DefaultErrorFallback}
      onError={(error, errorInfo) => {
        console.error('Performance wrapper error:', error, errorInfo);
      }}
    >
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export { PerformanceWrapper };
