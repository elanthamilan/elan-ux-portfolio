
import React from 'react';
import { cn } from '@/components/lib/utils';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  className,
  background = 'white',
  maxWidth = 'xl',
  padding = 'md'
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-gray-50 to-white'
  };

  const maxWidthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-none',
    full: 'w-full'
  };

  const paddingClasses = {
    none: '',
    sm: 'px-4 py-4',
    md: 'px-4 md:px-6 lg:px-8 py-8',
    lg: 'px-6 md:px-8 lg:px-12 py-12'
  };

  return (
    <div
      className={cn(
        'min-h-screen font-sans text-gray-900',
        backgroundClasses[background],
        className
      )}
    >
      <div
        className={cn(
          'mx-auto',
          maxWidthClasses[maxWidth],
          paddingClasses[padding]
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
