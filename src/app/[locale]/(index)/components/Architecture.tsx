'use client';

import { useTranslations } from "next-intl";

export default function Architecture() {
  const t = useTranslations('Architecture');

  return (
    <section className="relative pt-10 md:pt-[60px] px-5 md:pb-20 pb-14">
      <div className="w-full max-w-[726px] mx-auto">
        <h5 className="fade-up text-center md:text-[24px] text-[16px] font-medium leading-none md:mb-[46px] mb-8">
          {t('title')}
        </h5>
        <table className="fade-up border-collapse w-full border border-[#688BF5]/[0.5] [&_td:nth-of-type(1)]:font-semibold md:[&_td:nth-of-type(1)]:w-[200px] [&_td:nth-of-type(1)]:w-[120px] md:[&_td:nth-of-type(1)]:text-[18px] [&_td:nth-of-type(1)]:text-[16px] md:text-[16px] text-[14px] [&_td:nth-of-type(1)]:text-center [&_td:nth-of-type(2)]:bg-[#00021C] [&_td]:border [&_td]:border-[#688BF5]/[0.5] md:[&_td]:px-6 [&_td]:px-4 md:[&_td]:h-[60px] [&_td]:h-12">
          <tbody>
            <tr>
              <td>{t('blockchain')}</td>
              <td>{t('blockchain_value')}</td>
            </tr>
            <tr>
              <td>{t('token_standard')}</td>
              <td>{t('token_standard_value')}</td>
            </tr>
            <tr>
              <td>{t('nft_extension')}</td>
              <td>{t('nft_extension_value')}</td>
            </tr>
            <tr>
              <td>{t('wallet')}</td>
              <td>{t('wallet_value')}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
