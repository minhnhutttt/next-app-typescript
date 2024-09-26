"use client";

import FaqItem from "./faqItem";
import { FaqItemPropsType } from "./faqItem";
import useScrollAnimations from "@/hooks/useScrollAnimations";
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
    id: "1",
    question: "タイトルテキストが入ります。",
    answer: (
      <>
        詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。
      </>
    ),
  },
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
    id: "1",
    question: "タイトルテキストが入ります。",
    answer: (
      <>
        詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。
      </>
    ),
  },
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
    id: "1",
    question: "タイトルテキストが入ります。",
    answer: (
      <>
        詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。
      </>
    ),
  },
];

export default function FAQ() {
  const ref = useScrollAnimations();
  return (
    <div
    ref={ref}
      id="faq"
      className="px-5 pb-20 md:pb-[140px] pt-[200px] md:pt-[330px] bg-[url('/assets/images/bg-04.png')] bg-cover bg-top"
    >
      <div className="mx-auto w-full max-w-[920px]">
        <h4 data-scroll className="fade-up text-center font-extrabold text-[28px] md:text-[48px] font-roboto">
        FAQ
        </h4>
        <div className="mx-auto mt-5 w-full space-y-[20px] md:mt-[70px] md:space-y-[30px]">
          {faqData.map(({ id, question, answer }) => (
            <FaqItem key={id} id={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
