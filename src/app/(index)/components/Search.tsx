"use client";

import { Button } from "@/components/common/Button";
import { ButtonItem } from "@/components/common/ButtonItem";


interface SearchProps {
    title: string;
  items: string[];
}

export const Search = ({
    title,
  items,
}: SearchProps) => {

  return (
    <div className="w-full md:max-w-[1320px] max-w-[348px] mx-auto">
      <div className="fade-up md:text-[40px] text-[24px] font-bold max-md:text-center">{title}</div>
      <div className="flex items-center flex-wrap md:gap-x-[50px] md:gap-y-10 gap-y-6 gap-x-1 md:mt-9 mt-5">
        {items.map((item, index) => (
            <ButtonItem key={index}>
                {item}
            </ButtonItem>
        ))}
      </div>
      <div className="flex justify-center md:mt-10 mt-7">
        <Button link="/search" sm>
            <span className="flex items-center gap-2">もっと見る <img className="max-md:w-4" src="/assets/images/ic-plus.svg" alt="" /></span>
        </Button>
      </div>
    </div>
  );
};
