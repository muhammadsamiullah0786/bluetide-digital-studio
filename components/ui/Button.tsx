

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95';

  const variantClasses = {
    primary: 'bg-accent text-white hover:bg-blue-700 hover:-translate-y-0.5 shadow-soft hover:shadow-soft-lg',
    secondary: 'bg-transparent text-accent border-2 border-accent hover:bg-accent hover:text-white hover:-translate-y-0.5 hover:shadow-soft',
    outline: 'bg-transparent text-dark border-2 border-gray-300 hover:border-accent hover:text-accent hover:bg-blue-50',
    ghost: 'bg-transparent text-dark hover:text-accent hover:bg-gray-100',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
