export const Button = ({ link, text, type }: { link: string, text: string, type: number }) => {

    return <div className="md:h-[66px] h-[60px]">
        <a href={link} className={`flex items-center justify-center md:text-[24px] text-[18px] font-bold min-w-[244px] h-[56px] md:h-[62px] border-2 px-4 rounded-[10px] hover:mt-1 duration-300 hover:shadow-none ${type == 0 ? 'bg-[#DF6100] border-[#B3550D] text-white shadow-[0_4px_0_0_#B3550D]' : 'bg-white border-[#666] text-[#666] shadow-[0_4px_0_0_#666]'}`}>
        {text}
    </a>
    </div>
};