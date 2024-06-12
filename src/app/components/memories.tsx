const Memories = () => {
  return (
    <section>
        <div className="gradient-03 px-5 text-center md:h-[255px] h-[180px] flex items-center justify-center text-white font-bold xl:text-[62px] text-[clamp(20px,5.5vw,36px)] md:text-[clamp(40px,4.306vw,62px)]">
            愛するペットとの 『 おもいで 』が <br />
            少しずつ風化していく恐怖…
        </div>
        <div className="px-5 md:pb-[190px] pb-[100px]">
            <div className="w-full md:max-w-[1305px] max-w-[540px] mx-auto md:pt-[100px] pt-12">
                <div className="flex max-md:flex-col max-md:items-center gap-[30px]">
                    <figure className="max-md:w-auto max-xl:w-[40%]">
                        <img src="/assets/images/memories-01.png" alt="" />
                    </figure>
                    <div className="font-medium md:text-[24px] text-[16px] flex-1">
                        <span className="md:text-[32px] text-[20px]">ペットを亡くした悲しみは、言葉では表せないほど深いものです。</span>
                        <br /><br />
                        自宅や一緒に行った場所でふと思い出す、あの子の「声」「吐息」「仕草」「体温」「柔らかな毛並」。<br /><br />
                        <span className="bg-[linear-gradient(to_top,_#FBC70F_40%,_transparent_40%)]">何気ない日常のひとコマひとコマが、</span>今は悲しみに変わって胸を締め付けます。
                    </div>
                </div>
                <div className="w-full max-w-[930px] mx-auto pt-[70px]">
                    <div className="flex gap-[18px] pl-2">
                        <figure>
                            <img className="max-md:w-12" src="/assets/images/quote-left.png" alt="" />
                        </figure>
                        <span className="flex-1 bg-[#C8C8C8] h-0.5"></span>
                    </div>
                    <div className="flex justify-center md:px-[84px] py-4">
                        <p className="md:text-[20px] text-[16px] leading-loose font-medium">
                            私も、3年前に最愛の愛犬を亡くしました。あれから一日たりとも、彼女のことを思わない日はありません。でも、<span className="bg-[linear-gradient(to_top,_#C8C8C8_40%,_transparent_40%)]">月日が経つにつれ、少しずつ記憶があやふやになっていくんです。それが本当に怖いんです。</span>(40代女性)
                        </p>
                    </div>
                    <div className="flex items-end gap-[18px] pr-2">
                        <span className="flex-1 bg-[#C8C8C8] h-0.5"></span>
                        <figure>
                            <img className="max-md:w-12" src="/assets/images/quote-right.png" alt="" />
                        </figure>
                    </div>
                </div>
                <div className="md:mt-10 mt-8 w-full max-w-[732px] mx-auto bg-[url('/assets/images/bg-memories.png')] bg-no-repeat bg-right-bottom bg-[#F5F5F5] rounded-[20px] md:px-[30px] md:py-[34px] p-5 md:text-[18px] text-[14px] font-medium leading-[1.8]">
                    ペットを亡くしたあなた様は、今このような喪失感や悲しみ、そして大切な“おもいで”を失うことへの恐怖心を抱えているのではないでしょうか。<br />
                    <br />
                    まだペットがご健在の方も、いずれ訪れるその時を真剣に想像してみてください...
                </div>

                <div className="w-full max-w-[913px] mx-auto md:mt-[75px] mt-10">
                    <div>
                        <h5 className="md:text-[28px] text-[18px] font-medium text-center">悲しみに暮れるあなた様は、<br className="md:hidden" />こんな風に思っているかもしれません。</h5>
                        <figure className="mt-4">
                            <img src="/assets/images/line-title.png" alt="" />
                        </figure>
                    </div>
                    <div className="w-full max-w-[732px] mx-auto md:mt-10 mt-7 md:space-y-8 space-y-6">
                        <div className="flex items-center md:gap-[30px] gap-5">
                            <figure>
                                <img className="max-md:w-8" src="/assets/images/ic-check.png" alt="" />
                            </figure>
                            <p className="md:text-[18px] text-[14px] font-medium flex-1">
                                この子のために、<span className="bg-[linear-gradient(to_top,_#FBC70F_40%,_transparent_40%)]">心を込めた供養をしてあげたい。</span>でも、仕事や家庭の事情で、思うような供養やお墓参りができない…
                            </p>
                        </div>
                        <div className="flex items-center md:gap-[30px] gap-5">
                            <figure>
                                <img className="max-md:w-8" src="/assets/images/ic-check.png" alt="" />
                            </figure>
                            <p className="md:text-[18px] text-[14px] font-medium flex-1">
                            ペットとの<span className="bg-[linear-gradient(to_top,_#FBC70F_40%,_transparent_40%)]">“おもいで”が、風化してしまう前に形に残しておきたい。</span>でも、どうすればいいのかわからない…
                            </p>
                        </div>
                        <div className="flex items-center md:gap-[30px] gap-5">
                            <figure>
                                <img className="max-md:w-8" src="/assets/images/ic-check.png" alt="" />
                            </figure>
                            <p className="md:text-[18px] text-[14px] font-medium flex-1">
                            あの時、もっとあの子のためにできたことがあったのに。なんで私はほかの事を優先しちゃったんだろう。<span className="bg-[linear-gradient(to_top,_#FBC70F_40%,_transparent_40%)]">あの頃に戻れるなら戻りたい...</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative flex justify-center items-center md:mt-[56px] mt-10">
                    <figure>
                        <img className="max-md:w-[300px]" src="/assets/images/ic-triangle.png" alt="" />
                    </figure>
                    <div className="absolute inset-0 md:text-[22px] text-[16px] font-medium flex items-center justify-center text-center">
                    もしも愛するペットとの絆を永遠に紡ぐ方法があったら…<br />そんな悲痛な想いに寄り添う、新しい供養のカタチがあります
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Memories;
