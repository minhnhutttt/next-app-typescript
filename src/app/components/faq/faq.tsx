"use client";

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
  {
    id: "6",
    question: "タイトルテキストが入ります。",
    answer: (
      <>
        詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。
      </>
    ),
  }
];

export default function FAQ() {

  return (
    <section
      id="faq"
      className="px-5 pb-[160px] pt-20 md:pb-[290px] md:pt-[140px] bg-[#CFE8EA] [clip-path:polygon(0_11.5vw,_100%_0,_100%_calc(100%-11.5vw),_0%_100%)]"
    >
      <div className="mx-auto w-full max-w-[920px]">
        <h4 data-scroll className="ani-fade-up text-center text-black font-extrabold text-[28px] md:text-[48px]">
        FAQ
        </h4>
        <div className="mx-auto mt-5 w-full space-y-[20px] md:mt-[70px] md:space-y-[30px]">
          {faqData.map(({ id, question, answer }) => (
            <FaqItem key={id} id={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
