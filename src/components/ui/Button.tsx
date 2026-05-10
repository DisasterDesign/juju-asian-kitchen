import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'dark-outline' | 'ghost' | 'dark' | 'light';
type Size = 'sm' | 'md' | 'lg';

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-juju-coral text-white hover:bg-juju-coral-dark shadow-lg shadow-juju-coral/30 hover:shadow-juju-coral/50',
  secondary:
    'bg-transparent border-2 border-white text-white hover:bg-white hover:text-juju-black',
  'dark-outline':
    'bg-transparent border-2 border-juju-black text-juju-black hover:bg-juju-black hover:text-white',
  ghost: 'bg-transparent text-juju-black hover:bg-juju-muted',
  dark: 'bg-juju-black text-white hover:bg-juju-coral shadow-lg shadow-black/30 hover:shadow-juju-coral/40',
  light:
    'bg-white text-juju-black border-2 border-juju-black hover:bg-juju-black hover:text-white shadow-lg shadow-black/15',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const baseStyles =
  'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-juju-coral focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonBaseProps {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    />
  )
);
Button.displayName = 'Button';

export interface ButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    ButtonBaseProps {}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    />
  )
);
ButtonLink.displayName = 'ButtonLink';
