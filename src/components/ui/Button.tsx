import { cn } from '@/utils/cn';

type ButtonProps = {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  intent?: 'primary' | 'secondary' | 'danger';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  size = 'md',
  intent = 'primary',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // base style
        'inline-flex items-center justify-center rounded font-semibold transition-colors',
        // size variants
        {
          sm: 'px-2 py-1 text-sm',
          md: 'px-4 py-2 text-base',
          lg: 'px-6 py-3 text-lg',
        }[size],
        // intent variants
        {
          primary: 'bg-blue-600 text-white hover:bg-blue-700',
          secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
          danger: 'bg-red-600 text-white hover:bg-red-700',
        }[intent],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
