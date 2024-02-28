"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import type { FaqItemPropsType } from "./faqItem";
import FaqItem from "./faqItem";
const faqData: FaqItemPropsType[] = [
  {
    id: "1",
    question: "タイトルテキストが入ります。",
    answer: (
      <>
        詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。
      </>
    ),
  },
  {
    id: "2",
    question: "タイトルテキストが入ります。",
    answer: (
      <>
        詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。
      </>
    ),
  },
  {
    id: "3",
    question: "タイトルテキストが入ります。",
    answer: (
      <>
        詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。
      </>
    ),
  },
  {
    id: "4",
    question: "タイトルテキストが入ります。",
    answer: (
      <>
        詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。
      </>
    ),
  },
];

export default function FAQ() {
  const animateUpRefs = useScrollAnimation("fadeUp");
  return (
    <div
      id="faq"
      className="px-5 pb-12 pt-10 mb-[50px] md:mb-[100px] md:pb-[60px] md:pt-[64px]"
    >
      <div className="mx-auto w-full max-w-[920px]">
        <h4 ref={animateUpRefs} className="opacity-0 text-center font-roboto text-[28px] font-bold md:text-[48px]">
          FAQ
        </h4>
        <div className="mx-auto mt-5 w-full space-y-[20px] md:mt-[75px] md:space-y-[30px]">
          {faqData.map(({ id, question, answer }) => (
            <FaqItem key={id} id={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
