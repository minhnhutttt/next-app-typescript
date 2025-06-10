import Button from "@/components/Button";

const data = [
    {
        image: '/assets/images/howto-01.jpg',
        title: '作る。',
        text: '思いのままに、言葉を入力。'
    },
    {
        image: '/assets/images/howto-02.jpg',
        title: '完成する。',
        text: '1通のメッセージカード(専用のURL)が生成され完成します。'
    },
    {
        image: '/assets/images/howto-03.jpg',
        title: '届ける。',
        text: '専用URLをLINEやメールで送信。誰にも見られないOnly Oneな手紙。'
    }
]

const Howto = () => {
  return (
    <section className="md:mt-[238px] mt-[120px]">
        <div className="bg-[url(/assets/images/howto-bg.png)] bg-top bg-cover md:pt-[46px] px-5">
            <div className="w-full max-w-[1280px] mx-auto">
                <div data-scroll className="fade-up w-full md:max-w-[1080px] max-w-[530px] mx-auto relative flex justify-center bg-white border-[6px] border-[#007606] md:py-[60px] py-[30px] px-5 before:absolute md:before:-bottom-[40px] before:-bottom-[24px] md:before:w-[100px] before:w-[50px] md:before:h-[40px] before:h-[24px] before:[clip-path:polygon(0_0,_100%_0,_50%_100%)] after:absolute md:after:-bottom-[34px] after:-bottom-[16px] after:bg-white md:after:w-[100px] after:w-[50px] md:after:h-[40px] after:h-[24px] after:[clip-path:polygon(0_0,_100%_0,_50%_100%)] before:bg-[#007606]">
                    <h4 className="md:text-[60px] text-[28px] font-bold text-center">
                        あなたの言葉で、世界にひとつの<br className="max-md:hidden" />オリジナルWebページが作れる
                    </h4>
                </div>
                <div data-scroll className="fade-up grid lg:grid-cols-2 grid-cols-1 mt-20 md:mt-28 md:gap-y-[105px] gap-y-10 xl:gap-x-[153px] gap-x-[50px] w-full lg:max-w-[1280px] max-w-[530px] mx-auto pb-6 md:pb-10">
                    {data.map((item, index) => (
                        <div key={index}>
                            <div>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="text-white md:px-7 px-3 py-3">
                                <h5 className="md:text-[64px] text-[32px] font-extrabold tracking-[0.2em]">{item.title}</h5>
                                <p className="md:text-[28px] text-[20px] font-medium tracking-[0.1em] mt-3 md:mt-4">{item.text}</p>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
        <div data-scroll className="fade-up flex justify-center pt-12 pb-16 md:pt-20 md:pb-[100px] px-5">
            <Button />
        </div>
    </section>
  );
};

export default Howto;
