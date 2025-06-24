interface CompanyTypeItemProps {
  text: string;
}

const CompanyTypeItem = ({ text }: CompanyTypeItemProps) => (
  <li data-scroll className="fade-up flex items-center md:gap-4 gap-2">
    <img className="max-md:w-6" src="/assets/images/ic_check.png" alt="check" />
    <span className="text-[17px] md:text-[28px]">{text}</span>
  </li>
);


const companyTypes = [
  "複数サービスを扱う企業様",
  "士業・コンサル系のBtoB企業",
  "LPやウェブサイトが複数存在する組織",
  "説明書が多く離脱されやすい業種",
  "採用強化中の企業"
];

const Usecase = () => {
  return (
    <section className="relative pt-[120px] md:pt-[310px] md:pb-[180px] pb-[100px]">
      <div className="w-full md:max-w-[1440px] max-w-[480px] mx-auto px-5 md:px-10">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="flex flex-col text-center items-start">
            <div data-scroll className="fade-up flex items-center">
              <span className="bg-gradient-to-br from-[#CF2FF7] to-[#214BE6] w-10 md:w-[50px] h-1.5 md:h-2 mr-3 rounded-full"></span>
              <p className="text-[24px] md:text-[32px] font-bold font-syne">USE CASES</p>
            </div>
            <h3 data-scroll className="fade-up text-[32px] md:text-[36px] lg:text-[40px] xl:text-[50px] min-[1366px]:text-[64px] font-black pt-3 tracking-[0.2em]">
              <span className="bg-gradient-to-r from-[#CF2FF7] to-[#214BE6] text-transparent bg-clip-text">導入実績多数</span>
            </h3>
            <h4 data-scroll className="fade-up text-[24px] md:text-[32px] lg:text-[40px] xl:text-[50px] min-[1366px]:text-[64px] font-black tracking-[0.2em]">
              こんな企業に
            </h4>
            <h4 data-scroll className="fade-up text-[24px] md:text-[32px] lg:text-[40px] xl:text-[50px] min-[1366px]:text-[64px] font-black tracking-[0.2em]">
              選ばれています。
            </h4>
          </div>
          <div className="lg:w-1/2 md:px-10">
          <ul className="flex flex-col gap-2 md:gap-8 pt-12">
            {companyTypes.map((text, index) => (
              <CompanyTypeItem key={index} text={text} />
            ))}
          </ul>
          </div>
        </div>
      </div>

    <div data-scroll className="fade-up relative mt-12 md:mt-28 max-w-full">
        <img className="w-full max-md:hidden" src="/assets/images/gallery.png" alt="Business person gallery" />
        <img className="w-full md:hidden object-cover max-md:h-[190px]" src="/assets/images/gallery-sp.png" alt="Business person gallery" />
    </div>
    </section>
  );
};


export default Usecase;