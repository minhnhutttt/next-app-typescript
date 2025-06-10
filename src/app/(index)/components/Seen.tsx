import Button from "@/components/Button";

const data = [
    {
        image: '/assets/images/user-01.png',
        title: '20代・彼女へメッセージ',
        text: (<>
            普段は「好き」とか言うの、ほんと苦手で。<br />
            記念日なのに、いつも通りになっちゃう自分が嫌でした。<br />
            THE LETTERは、言葉だけじゃなくて「渡し方」がスマホがあればできるので彼女がURLを開いたとき、泣きながら笑ってた。<br />
            俺の言葉で人が感動するって、すごいなって思った。
        </>)
    },
    {
        image: '/assets/images/user-02.png',
        title: '30代・息子へメッセージ',
        text: (<>
            息子が中学校に上がるタイミングで、何か残したいと思ったんです。<br />
            面と向かって言えない「がんばれ」とか「信じてるよ」とか。<br />
            THE LETTERの形式なら、照れくさくても素直になれる。<br />
            嫁にも内緒で送ったので感動してて、俺も胸がいっぱいになりました。
        </>)
    },
    {
        image: '/assets/images/user-03.png',
        title: '40代・部下へメッセージ',
        text: (<>
            退職する部下に、何か言葉を残したくて。<br />
            でも、LINEじゃなんか軽すぎるしメールじゃ事務的になるし。<br />
            THE LETTERで送ったら、「一生の宝にします」って言ってくれて。<br />
            言葉の力って、こういう時こそ必要なんだなって思った。
        </>)
    },
    {
        image: '/assets/images/user-04.png',
        title: '50代・妻へメッセージ',
        text: (<>
            若い頃は「言わなくてもわかるだろ」って思ってたので何もしてこなかったんですが、人生も後半になり、今なら伝えれると思い結婚して初めて「ありがとう」を送れた気がする。妻は何も言わず、画面を見ながら微笑んでたのが嬉しかった、残りの人生もよろしくと伝えました。
        </>)
    },
]

const Seen = () => {
  return (
    <section className="bg-[url(/assets/images/seen-bg.png)] bg-[size:100%_100%] pt-20 md:pt-[155px] px-5 pb-16 md:pb-[100px]">
        <div className="w-full max-w-[1000px] mx-auto">
            <div className="flex justify-center">
                <h4 data-scroll className="fade-up lg:text-[128px] md:text-[100px] text-[50px] text-white text-center font-medium tracking-[0.18em] border-b  border-white pb-2">
                    利用者の声
                </h4>
            </div>
            <div className="text-white md:space-y-[70px] space-y-10 md:mt-[100px] mt-16">
                {data.map((item,index) => (
                    <div data-scroll className="fade-up even:flex-row-reverse flex md:items-center md:gap-[60px] gap-4" key={index}>
                        <span className="max-md:w-[70px] [filter:drop-shadow(0px_0px_10px_rgba(0,_0,_0,_0.25))]"><img src={item.image} alt={item.title} /></span>
                        <div className="border border-[#ECFFED] md:min-h-[250px] md:py-[30px] py-5 md:px-10 xl:px-20 px-4 font-medium flex-1 md:space-y-5 space-y-3">
                            <p className="md:text-[24px] text-[18px]">{item.title}</p>
                            <p className="md:text-[18px] text-[14px]">{item.text}</p>
                        </div>
                    </div>  
                ))}
            </div>
            <div className="w-full max-w-[566px] mx-auto text-white md:mt-[145px] mt-[100px]">
                <h5 data-scroll className="fade-up md:text-[40px] text-[24px] font-medium">アカウント登録は不要。</h5>
                <p data-scroll className="fade-up md:text-[24px] text-[18px] font-medium mt-2.5">
                    思い立ったその瞬間に、あなたの言葉をかたちにできます。<br />
                    <br />
                    誰かの心を動かす。その一歩を、今ここから。      
                </p>
                <div data-scroll className="fade-up flex justify-center md:mt-20 mt-12">
                    <Button />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Seen;
