interface ButtonProps {
    href: string;
    onClick?: () => void;
    imgSrc: string;
    text: string;
    rect: string;
    size?: "lg";
  }

export default function Button({ href, onClick, imgSrc, text, size, rect }: ButtonProps) {
    return (
        <a href={href} className={`flex items-center justify-center gap-2 rounded-[5px] border border-white font-bold text-white ${rect} ${size === 'lg' ? 'w-[240px] h-[56px] md:text-[18px] text-[15px]' : 'max-lg:w-[240px]  w-[200px] h-[50px] md:text-[16px] text-[14px]'}`}
            onClick={onClick}>
            <img src={imgSrc}  />
            <span>{text}</span>
        </a>
    );
  }
  