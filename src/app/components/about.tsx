const data = [
    {
        id: '1',
        title: '現実の供養所',
        text: '「KARIMATA(狩俣)供養所」で、ペットの遺骨や遺品を供養'
    },
    {
        id: '2',
        title: 'メタバース空間',
        text: (<>「KARIMATA(狩俣)メタバース」で、ペットとの<br className="max-md:hidden" />“おもいで”を紡ぎなおす</>)
    },
    {
        id: '3',
        title: '“おもいで”がよみがえる',
        text: '記憶の中で風化しかけたペットの姿や鳴き声、一緒に過ごした“おもいで”がよみがえる'
    },
    {
        id: '4',
        title: '2D/3D化',
        text: '2D/3Dデータ化されたペットや“おもいで”の品をメタバース内に展示可能'
    },
    {
        id: '5',
        title: 'ペットの冥福を祈る',
        text: 'AI僧侶による定期的な読経やお線香をあげる体験（開発中）で、ペットの冥福を祈る'
    },
]

const About = () => {
    return (
      <section className="overflow-hidden">
        <div className="gradient-03 px-5 text-center md:h-[255px] h-[180px] flex items-center justify-center text-white font-bold xl:text-[62px] text-[clamp(20px,5.5vw,36px)] md:text-[clamp(40px,4.306vw,62px)]">
        『メタでペット供養』とは
        </div>
        <div className="bg-[url('/assets/images/bg-about.png')] bg-cover bg-bottom md:pt-[120px] pt-20 px-5 md:pb-[264px] pb-[160px]">
            <div className="w-full md:max-w-[1274px] max-w-[540px] mx-auto max-md:flex-col flex md:gap-10 gap-8">
                <figure className="drop-shadow-lg max-xl:w-1/2 max-md:w-auto">
                    <img src="/assets/images/img-about.png" alt="" />
                </figure>
                <div className="">
                    <p className="max-w-[511px] md:text-[24px] text-[16px] font-bold leading-[2]">
                    『メタでペット供養』は、現実とメタバースでの供養が織りなす、新しい供養のカタチです。<br /><br />現実の供養所である「KARIMATA(狩俣)供養所」とメタバース供養所が融合することで、ペットとの再会の喜びと死への向き合いをバランス良く体験可能です。あなた様とペットだけの特別な空間がそこには広がっています。
                    </p>
                </div>
            </div>
        </div>
        <div className="px-5 bg-[url('/assets/images/bg-gradient.png')] bg-bottom md:bg-[length:100%_577px] bg-[length:100%_1000px] bg-no-repeat">
            <div className="w-full md:max-w-[1304px] max-w-[540px] mx-auto relative pt-[136px]">
                <div className="absolute md:top-[-200px] top-[-130px] dt:top-[-128px] max-md:max-w-[200px]">
                    <img src="/assets/images/img-about-pet.png" alt="" />
                </div>
                <div className="md:max-w-[1120px] max-w-[540px] mx-auto flex flex-wrap gap-x-[100px] md:gap-y-[130px] gap-y-[100px] max-xl:justify-center">
                    {data.map((item) => (
                        <div className="w-[306px]" key={item.id}>
                            <div className="relative size-[292px]">
                                <span className="gradient-04 absolute w-full h-full -right-3 -bottom-3"></span>
                                <div className="border-2 h-full border-[#1B0220] bg-white relative pt-14 bg-[url('/assets/images/about-triangle.png')] bg-no-repeat bg-[bottom_10px_right_10px]">
                                    <div className="w-20 bg-white absolute top-[-60px] left-5 text-center">
                                        <span className="font-mplus text-[100px] font-medium leading-none text-gradient-02">{item.id}</span>
                                    </div>
                                    <div className="text-center">
                                        <span className="h-[52px] flex items-center justify-center text-gradient-03 font-bold text-[22px]">{item.title}</span>
                                        <span className="w-[232px] mx-auto h-px gradient-03 block"></span>
                                    </div>
                                    <p className="w-[232px] mx-auto text-[18px] pt-[14px] font-medium">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="w-[90%] md:w-[306px] max-md:flex max-md:justify-end">
                        <img className="mt-[-50px] md:w-[355px] w-[205px] max-w-[355px]" src="/assets/images/img-about-pet-02.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[1191px] mx-auto flex items-center md:gap-[35px] gap-7 max-md:flex-col mt-[24px] md:pb-[69px] pb-10">
                <figure>
                    <img className="max-md:w-[200px]" src="/assets/images/img-staff.png" alt="" />
                </figure>
                <div className="w-full max-w-[747px] flex-1">
                    <div className="rounded-[40px] border-2 border-[#C985FF] bg-white/40 bg-[url('/assets/images/bg-memories-03.png')] bg-no-repeat bg-right-bottom md:text-[22px] text-[18px] font-medium md:p-[51px] p-6 leading-[1.8] tracking-wide">
                    「メタでペット供養」は、ペットロスに悩む方々に寄り添い、ペットとの絆を永遠に大切にするお手伝いをします。
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
  };
  
  export default About;
  