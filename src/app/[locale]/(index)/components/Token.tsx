'use client';

import { useTranslations } from "next-intl";

export default function Token() {
  const t = useTranslations('Token');

  return (
    <section className="relative bg-[url(/assets/images/bg-token.png)] md:bg-[size:100%_auto] bg-top bg-no-repeat px-5 md:mt-[120px] md:pt-[110px] pt-16 md:pb-[100px] pb-16">
      <h4 className="fade-up text-center md:text-[64px] text-[28px] font-medium text-[#C8D6FF] leading-loose py-5 px-2.5 tracking-widest">
        {t('heading')}
      </h4>

      <div className="w-full max-w-[622px] mx-auto md:mt-8 mt-5">
        <table className="fade-up border-collapse w-full border border-[#688BF5] [&_td:nth-of-type(1)]:font-semibold md:[&_td:nth-of-type(1)]:w-[200px] [&_td:nth-of-type(1)]:w-[120px] md:[&_td:nth-of-type(1)]:text-[18px] [&_td:nth-of-type(1)]:text-[16px] md:text-[20px] text-[18px] [&_td:nth-of-type(1)]:text-center [&_td:nth-of-type(1)]:bg-[#688BF5]/[0.3] [&_td:nth-of-type(2)]:bg-[#00021C] [&_td]:border [&_td]:border-[#688BF5] md:[&_td]:px-6 [&_td]:px-4 md:[&_td]:h-[60px] [&_td]:h-12">
          <tbody>
            <tr>
              <td>{t('name_label')}</td>
              <td>{t('name_value')}</td>
            </tr>
            <tr>
              <td>{t('symbol_label')}</td>
              <td>{t('symbol_value')}</td>
            </tr>
            <tr>
              <td>{t('supply_label')}</td>
              <td>{t('supply_value')}</td>
            </tr>
            <tr>
              <td>{t('blockchain_label')}</td>
              <td>{t('blockchain_value')}</td>
            </tr>
            <tr>
              <td>{t('standard_label')}</td>
              <td>{t('standard_value')}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="fade-up flex justify-center items-center md:mt-[177px] mt-[100px]">
        <img className="max-md:hidden" src="/assets/images/graph.png" alt="" />
        <img className="md:hidden" src="/assets/images/graph-sp.png" alt="" />
      </div>
    </section>
  );
}
