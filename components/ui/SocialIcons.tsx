
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
    sm: 20,
    md: 26,
    lg: 32,
  };

  const paddingMap = {
    sm: 'p-2.5',
    md: 'p-3.5',
    lg: 'p-5',
  };

  const variantClasses = {
    light: 'bg-gray-100 text-dark hover:bg-accent hover:text-white shadow-sm',
    dark: 'bg-white/15 backdrop-blur-md text-white border border-white/20 hover:bg-accent hover:border-accent shadow-lg',
  };

  return (
    <div className={`flex ${vertical ? 'flex-col' : 'flex-row'} gap-3 ${className}`}>
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${paddingMap[size]} rounded-lg ${variantClasses[variant]} transition-all duration-300 hover:-translate-y-1 hover:scale-110 inline-flex items-center justify-center`}
          aria-label={social.label}
          title={social.label}
        >
          <Icon name={social.icon} size={sizeMap[size]} />
        </a>
      ))}
    </div>
  );
}
