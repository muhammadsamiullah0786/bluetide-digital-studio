import Icon from './Icon';

interface SocialIconsProps {
  socials: Array<{ icon: string; label: string; href: string }>;
  size?: 'sm' | 'md' | 'lg';
  vertical?: boolean;
  className?: string;
  variant?: 'light' | 'dark';
}

export default function SocialIcons({
  socials,
  size = 'md',
  vertical = false,
  className = '',
  variant = 'light',
}: SocialIconsProps) {
  const sizeMap = {
    sm: 16,
    md: 18,
    lg: 22,
  };

  const boxMap = {
    sm: 'h-9 w-9',
    md: 'h-11 w-11',
    lg: 'h-13 w-13',
  };

  const variantClasses = {
    light:
      'bg-white text-slate-700 border border-slate-200 hover:border-accent hover:bg-accent hover:text-white shadow-soft',
    dark:
      'bg-white/[0.04] text-white border border-white/15 backdrop-blur-md hover:border-cyan hover:bg-cyan/10 hover:text-cyan',
  };

  return (
    <div className={`flex ${vertical ? 'flex-col' : 'flex-row'} gap-2.5 ${className}`}>
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${boxMap[size]} rounded-lg ${variantClasses[variant]} transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center justify-center`}
          aria-label={social.label}
          title={social.label}
        >
          <Icon name={social.icon} size={sizeMap[size]} />
        </a>
      ))}
    </div>
  );
}
