import { ReactNode } from "react";

interface StepCardProps {
  imageSrc: string;
  stepNumber: number;
  title: ReactNode;
  description: string;
  imageAlt: string;
}

const StepCard = ({ imageSrc, stepNumber, title, description, imageAlt }: StepCardProps) => {
  return (
    <div data-scroll className="fade-up text-center flex flex-col items-center relative h-full">
      <div>
        <img className="rounded-[20px] [box-shadow:0px_0px_40px_0px_rgba(0,_0,_0,_0.10)]" src={imageSrc}
            alt={imageAlt} />
      </div>
      <div className="bg-gradient-to-br from-[#10E188] to-[#05BAEA] text-white rounded-full flex items-center justify-center font-bold md:size-[68px] size-12 md:text-[50px] text-[32px] font-mohave italic leading-none pt-2 pr-2 md:-mt-[34px] -mt-[24px]">
        {stepNumber}
      </div>
      <div className="w-full max-w-[360px] mx-auto">
        <h3 className=" font-bold md:text-[24px]">
            {title}
        </h3>
        <p className=" text-[14px] md:text-[18px] text-left flex-grow mt-5 max-md:text-center">
            {description}
        </p>
      </div>
    </div>
  );
};


const steps = [
  {
    imageSrc: "/assets/images/setup-1.png",
    imageAlt: "Admin Screen Setup",
    stepNumber: 1,
    title: (<>管理画面から<br />ボタン名とリンクを設定</>),
    description: "表示するボタンのテキストとクリック後のリンク先を簡単設定"
  },
  {
    imageSrc: "/assets/images/setup-2.png",
    imageAlt: "Tag Insertion and Google Analytics Integration",
    stepNumber: 2,
    title: (<>タグをサイトに貼り付け<br />Googleアナリティクス連携</>),
    description: "自動生成されたコードをコピー＆ペーストするだけ"
  },
  {
    imageSrc: "/assets/images/setup-3.png",
    imageAlt: "Mobile Optimization",
    stepNumber: 3,
    title: (<>モバイル最適化<br /><br className="max-md:hidden" /></>),
    description: "ウェブサイトはトップページに表示されます",
  }
];

const Setup = () => {
  return (
    <section className="relative pt-[120px] md:pt-[240px]">
      <div className="w-full md:max-w-[1440px] max-w-[480px] mx-auto px-5 md:px-10">
        <div>
          <div data-scroll className="fade-up flex w-full items-center">
            <span className="bg-gradient-to-br from-[#10E188] to-[#05BAEA] w-10 md:w-[50px] h-1.5 md:h-2 mr-3 rounded-full"></span>
            <p className=" text-[24px] md:text-[32px] font-bold font-syne">SETUP</p>
          </div>
          <h3 data-scroll className="fade-up text-[32px] md:text-[36px] lg:text-[40px] xl:text-[50px] min-[1366px]:text-[64px] font-black pt-3 tracking-[0.2em]">
            導入方法<br />
            <div className="flex items-center md:mt-6 mt-2">
              <span className="font-bold text-[24px] md:text-[40px] lg:text-[60px] xl:text-[80px] min-[1366px]:text-[100px] text-white font-roboto md:size-16 size-12 lg:size-[80px] xl:size-[110px] rounded-full italic flex items-center justify-center bg-gradient-to-br from-[#10E188] to-[#05BAEA] mr-2 sm:mr-4">
                3
              </span>
              <span className="text-[20px] md:text-[28px] lg:text-[36px] xl:text-[44px] min-[1366px]:text-[60px] font-black tracking-[0.2em]">ステップで導入完了</span>
            </div>
          </h3>
        </div>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16 md:mt-14 mt-9 w-full max-w-[1310px]">
          {steps.map((step) => (
            <StepCard key={step.stepNumber} {...step} />
          ))}
        </div>

        <div data-scroll className="fade-up max-w-[722px] mx-auto bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl text-left">
          <p className="font-bold text-[18px] md:text-[24px] leading-relaxed">
            Unique Data Miningでは、ユーザー行動に基づいた設計により、導入されたウェブサイトは「成果を生む構造」へと進化します。
          </p>
        </div>
      </div>
    </section>
  );
};


export default Setup;