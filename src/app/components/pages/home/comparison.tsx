export default function Comparison() {
    return (
      <div className="bg-[#F5F5F5] px-5">
        <div className="w-full max-w-[1440px] mx-auto relative">
            <div className="w-full md:max-w-[1200px] max-w-[480px] mx-auto pt-12 md:pt-[116px] md:pb-[156px] pb-[100px] relative">
                <h5 className="min-[1440px]:text-[50px] md:text-[44px] text-[30px] font-bold text-center">他社サービスとの比較</h5>
                <div className="mt-[190px] md:mt-[88px] relative">
                    <figure className="absolute left-0 min-[1440px]:left-[-90px] min-[1440px]:bottom-[calc(100%-190px)] md:bottom-[calc(100%-15vw)] bottom-[calc(100%-80px)]">
                        <img className="w-[280px] md:w-[34.375vw] min-[1440px]:w-[495px]" src="/images/img-gun-02.png" alt="" />
                    </figure>
                    <table className="w-full border-collapse table-fixed relative">
                    <tbody>
                        <tr>
                            <th className="max-md:w-[110px]"></th>
                            <th className="md:h-[112px] h-[80px] align-middle px-2 md:px-4 border border-[#D9D9D9] bg-[#F9E84A] ">
                                <figure className="h-full flex items-center justify-center">
                                    <img src="/images/logo-sm.png" alt="" />
                                </figure>
                            </th>
                            <th className="md:h-[112px] h-[80px] align-middle px-2 md:px-4 border border-[#D9D9D9] bg-white">
                                <p className="lg:text-[72px] md:text-[54px] text-[28px] font-bold">E<span className="relative -top-1 md:-top-1.5 lg:text-[48px] md:text-[32px] text-[18px]">社</span></p>
                            </th>
                            <th className="md:h-[112px] h-[80px] align-middle px-2 md:px-4 border border-[#D9D9D9] bg-white">
                                <p className="lg:text-[72px] md:text-[54px] text-[28px] font-bold">M<span className="relative -top-1 md:-top-1.5 lg:text-[48px] md:text-[32px] text-[18px]">社</span></p>
                            </th>
                        </tr>
                            <tr>
                                <td className="md:h-[112px] h-[80px] align-middle px-2 md:px-4 border border-[#D9D9D9] bg-white lg:text-[36px] md:text-[28px] text-[16px] text-center font-bold break-keep">表示の速さ</td>
                                <td className="align-middle px-2 md:px-4 border border-[#D9D9D9] bg-[#EDF4FC]">
                                    <figure className="flex justify-center">
                                        <img className="max-md:w-[32px] max-lg:w-[54px]" src="/images/ic-star.png" alt="" />
                                    </figure>
                                </td>
                                <td className="align-middle px-2 md:px-4 border border-[#D9D9D9] bg-white">
                                    <figure className="flex justify-center">
                                        <img className="max-md:w-[32px] max-lg:w-[54px]" src="/images/ic-triangle.png" alt="" />
                                    </figure>
                                </td>
                                <td className="align-middle px-2 md:px-4 border border-[#D9D9D9] bg-white">
                                    <figure className="flex justify-center">
                                        <img className="max-md:w-[32px] max-lg:w-[54px]" src="/images/ic-triangle.png" alt="" />
                                    </figure>
                                </td>
                            </tr>
                            <tr>
                                <td className="md:h-[112px] h-[80px] align-middle px-2 md:px-4 border border-[#D9D9D9] bg-white lg:text-[36px] md:text-[28px] text-[16px] text-center font-bold break-keep">使いやすさ</td>
                                <td className="align-middle px-2 md:px-4 border border-[#D9D9D9] bg-[#EDF4FC]">
                                    <figure className="flex justify-center">
                                        <img className="max-md:w-[32px] max-lg:w-[54px]" src="/images/ic-star.png" alt="" />
                                    </figure>
                                </td>
                                <td className="align-middle px-2 md:px-4 border border-[#D9D9D9] bg-white">
                                    <figure className="flex justify-center">
                                        <img className="max-md:w-[32px] max-lg:w-[54px]" src="/images/ic-triangle.png" alt="" />
                                    </figure>
                                </td>
                                <td className="align-middle px-2 md:px-4 border border-[#D9D9D9] bg-white">
                                    <figure className="flex justify-center">
                                        <img className="max-md:w-[28px] max-lg:w-[48px]" src="/images/ic-x.png" alt="" />
                                    </figure>
                                </td>
                            </tr>
                            <tr>
                                <td className="md:h-[112px] h-[80px] align-middle px-2 md:px-4 border border-[#D9D9D9] bg-white lg:text-[36px] md:text-[28px] text-[16px] text-center font-bold break-keep">拡張性</td>
                                <td className="align-middle px-2 md:px-4 border border-[#D9D9D9] bg-[#EDF4FC]">
                                    <figure className="flex justify-center">
                                        <img className="max-md:w-[32px] max-lg:w-[54px]" src="/images/ic-star.png" alt="" />
                                    </figure>
                                </td>
                                <td className="align-middle px-2 md:px-4 border border-[#D9D9D9] bg-white">
                                    <figure className="flex justify-center">
                                        <img className="max-md:w-[28px] max-lg:w-[48px]" src="/images/ic-x.png" alt="" />
                                    </figure>
                                </td>
                                <td className="align-middle px-2 md:px-4 border border-[#D9D9D9] bg-white">
                                    <figure className="flex justify-center">
                                        <img className="max-md:w-[32px] max-lg:w-[54px]" src="/images/ic-triangle.png" alt="" />
                                    </figure>
                                </td>
                            </tr>
                            <tr>
                                <td className="md:h-[112px] h-[80px] align-middle px-2 md:px-4 border border-[#D9D9D9] bg-white lg:text-[36px] md:text-[28px] text-[16px] text-center font-bold break-keep">透明性</td>
                                <td className="align-middle px-2 md:px-4 border border-[#D9D9D9] bg-[#EDF4FC]">
                                    <figure className="flex justify-center">
                                        <img className="max-md:w-[32px] max-lg:w-[54px]" src="/images/ic-star.png" alt="" />
                                    </figure>
                                </td>
                                <td className="align-middle px-2 md:px-4 border border-[#D9D9D9] bg-white">
                                    <figure className="flex justify-center">
                                        <img className="max-md:w-[32px] max-lg:w-[54px]" src="/images/ic-triangle.png" alt="" />
                                    </figure>
                                </td>
                                <td className="align-middle px-2 md:px-4 border border-[#D9D9D9] bg-white">
                                    <figure className="flex justify-center">
                                        <img className="max-md:w-[32px] max-lg:w-[54px]" src="/images/ic-triangle.png" alt="" />
                                    </figure>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    );
  }
  