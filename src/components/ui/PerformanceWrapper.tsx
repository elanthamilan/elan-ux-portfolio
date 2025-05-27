
import React, { Component, ReactNode } from 'react';

interface PerformanceWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<PerformanceWrapperProps, ErrorBoundaryState> {
  constructor(props: PerformanceWrapperProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Performance Wrapper Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

export const PerformanceWrapper: React.FC<PerformanceWrapperProps> = ({ 
  children, 
  fallback 
}) => {
  return (
    <ErrorBoundary fallback={fallback}>
      <React.Suspense fallback={fallback}>
        {children}
      </React.Suspense>
    </ErrorBoundary>
  );
};
