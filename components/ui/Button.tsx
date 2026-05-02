interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'light';
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
  const baseClasses =
    'btn-shine group relative font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] tracking-tight';

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-accent to-cyan text-white shadow-[0_10px_30px_-10px_rgba(124,58,237,0.6)] hover:shadow-[0_18px_45px_-10px_rgba(124,58,237,0.7)] hover:-translate-y-0.5',
    secondary:
      'bg-transparent text-accent border-2 border-accent/30 hover:border-accent hover:bg-accent hover:text-white hover:-translate-y-0.5 hover:shadow-soft-md',
    outline:
      'bg-transparent text-dark border-2 border-gray-200 hover:border-accent hover:text-accent hover:bg-accent/5 hover:-translate-y-0.5',
    ghost:
      'bg-transparent text-dark hover:text-accent hover:bg-gray-100',
    light:
      'bg-white text-navy hover:bg-cyan/10 hover:text-accent hover:-translate-y-0.5 shadow-soft hover:shadow-soft-md',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm sm:text-base',
    lg: 'px-7 py-3.5 text-base sm:px-8 sm:py-4 sm:text-base',
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
