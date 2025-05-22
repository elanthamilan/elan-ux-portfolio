import React from 'react';
export const Badge = ({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span style={{ padding: '0.2em 0.6em', background: '#eee', borderRadius: '0.5em', fontSize: '0.9em' }} {...props}>{children}</span>
);
export default Badge; 