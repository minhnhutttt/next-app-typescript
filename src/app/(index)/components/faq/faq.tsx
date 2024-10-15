"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import FaqItem from "./faqItem";
import { FaqItemPropsType } from "./faqItem";

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
  {
    id: "5",
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
      id="faq"
      ref={ref}
      className="px-5 pb-12 pt-14  md:pb-[90px] md:pt-[150px]"
    >
      <div className="mx-auto w-full max-w-[920px]">
        <h4 className="fade-up text-center font-extrabold text-[28px] md:text-[48px]">
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
