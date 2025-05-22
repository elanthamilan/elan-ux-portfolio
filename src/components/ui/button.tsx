import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const Button = ({ children, asChild, ...props }: ButtonProps) => {
  if (asChild) {
    return React.cloneElement(children as React.ReactElement, props);
  }
  return <button {...props}>{children}</button>;
};

export default Button; 