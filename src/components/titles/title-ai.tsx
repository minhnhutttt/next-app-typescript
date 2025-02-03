"use client"
import { TitleProps } from '@/type';


const TitleAI = ({ rect }: TitleProps) => {

  return (
    <svg className={rect} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 15" fill="none">
        <path className="fill-[#FF5660] dark:fill-[#FC645B]" d="M5.76486 14.1293L7.45524 12.2488H17.0793L12.3988 2.67121L2.64721 14.1293H0L11.2825 0.97401C11.6573 0.543734 12.2154 0.129395 12.8932 0.129395C13.5709 0.129395 13.9856 0.503894 14.2168 0.97401L20.7471 14.1213H5.76486V14.1293Z" />
        <path className="fill-[#231815] dark:fill-[#FFFFFF]" d="M22.4214 14.1296L24.8773 0.312988H27.1098L24.654 14.1217H22.4214V14.1296Z" />
    </svg>
  );
};

export default TitleAI;
