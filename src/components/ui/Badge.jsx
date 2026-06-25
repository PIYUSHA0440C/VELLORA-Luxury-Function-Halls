import React from 'react';
import { cn } from '../../lib/utils';

const Badge = ({ children, className }) => {
  return (
    <div className={cn(
      "inline-flex items-center rounded-full border border-[var(--color-product-border)] px-3 py-1 text-xs font-medium text-[var(--color-product-text)] transition-colors glow-border bg-[var(--color-product-card)]",
      className
    )}>
      {children}
    </div>
  );
};

export default Badge;
