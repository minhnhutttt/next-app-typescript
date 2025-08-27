import { cn } from '@/utils/cn';

type ButtonProps = {
  link: string;
  children: React.ReactNode;
  className?: string;
  targetBlank?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ link, children, className, targetBlank }: ButtonProps) {
  return (
    <a
      href={link}
      target={targetBlank ? '_blank' : undefined}
      rel={targetBlank ? 'noopener noreferrer' : undefined}
      className={cn(
        'flex items-center justify-center gap-3 bg-[#1E1E1E] text-[23px] leading-none font-bold text-white transition-colors duration-300 hover:opacity-70 md:text-[36px]',
        className,
      )}
    >
      <img src="/assets/images/btn-arrow.svg" alt="" />
      <span className="-mt-1">{children}</span>
    </a>
  );
}
