type PageHeadProps = {
  bg: string;
  title: string;
  subtitle?: string;
  text?: string;
};

export const PageHead = ({ bg, title, subtitle, text }: PageHeadProps) => {
  return (
    <div className="mt-[62px] lg:mt-20">
      <div
        className="flex h-[300px] items-center bg-cover bg-top px-5 md:h-[420px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="mx-auto w-full max-w-[1320px]">
          <h1 className="text-[40px] leading-[1.1] font-medium md:text-[80px]">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-[15px] leading-none font-light md:mt-5 md:text-[20px]">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {text && (
        <div className="mx-auto -mt-8 w-full max-w-[840px] px-5 text-[15px] leading-loose tracking-wider md:-mt-15 md:text-[20px]">
          {text}
        </div>
      )}
    </div>
  );
};
