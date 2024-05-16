"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
      id: "01",
      from: "千葉産",
      name: "Chiba",
      image: "/assets/images/img-flavors-card-chiba.jpg",
      body: (
        <>
          独特の香りと風味を持っています。
          <br />
          多くの人がその爽やかな香りとやや苦味のある風味を楽しめます。これは、柿の葉特有の特性に由来します。
        </>
      ),
      details: {
        scent: 'しっかりとした香り',
        taste: '雑味が少なく、透明感のある味',
        place: '千葉県 勝浦市',
        degree: '浅焙煎',
      },
      footer: (
        <div className="absolute bottom-0 -left-4 text-[73px] md:text-[180px] font-mincho italic text-[#2D971C]/[0.25] font-light leading-[0.3]">
          C<span className=" text-[50px] md:text-[145px]">hiba</span>
        </div>
      )
    },
    {
        id: "02",
        from: "青梅産",
        name: "ome",
        image: "/assets/images/img-flavors-card-ome.jpg",
        body: (
        <>
            肉厚で柔らかな香りと独特の風味を持っています。その風味には、柿の葉特有のほのかな苦味が含まれ、一般的にはわずかな甘みも感じられます。
        </>
        ),
        details: {
            scent: 'フルーツのような熟成香',
            taste: 'きめ細かくすっきりとした浅めの味わい',
            place: '青梅市',
            degree: '浅焙煎',
        },
        footer: (
        <div className="absolute bottom-0 -left-4 text-[50px] md:text-[165px] font-mincho italic text-[#2D971C]/[0.25] font-light leading-[0.4]">
            <span className="max-md:text-[83px]">O</span>me
        </div>
        )
    },
    {
        id: "03",
              from: "和歌山産",
              name: "Wakayama",
              image: "/assets/images/img-flavors-card-wakayama.jpg",
              body: (
                <>
                  独特の香りと風味を持っています。香りは新鮮で草のようであり、柿の葉特有の苦味や草の風味と共に、微妙な甘さを感じさせることがあります。これにより、和歌山県の柿の葉茶は他の茶とは異なる個性を持っています。
                </>
              ),
              details: {
                scent: '甘く優しい香り',
                taste: 'きめ細かくすっきりとした浅めの味わい',
                place: '',
                degree: '浅煎り',
              },
              footer: (
                <div className="absolute bottom-0 -md:left-10 -left-4 text-[27.5px] md:text-[95px] font-mincho italic text-[#2D971C]/[0.25] font-light leading-[0.4]">
                  <span className="md:text-[120px] text-[45px]">W</span>akayama
                </div>
              )
    }
]

  export default function Flavors() {
    const ref = useScrollAnimations();
    return (
        <div ref={ref} className="relative overflow-hidden pb-[53px] md:pb-[170px]">
      <figure className="fade-up absolute w-[24.2%] top-[9.5%] right-[-13.5%]">
        <img src="/assets/images/deco-03.png" alt="" />
      </figure>
      <figure className="fade-up absolute w-[18.66%] bottom-0 left-[-2%]">
        <img src="/assets/images/deco-04.png" alt="" />
      </figure>
      <div className="w-full max-w-[1190px] mx-auto relative px-5">
        <div className="fade-up flex items-center justify-center border-b border-black pb-5">
          <h2 className="font-bold font-mincho text-[5.333vw] md:text-[40px] text-black leading-tight max-md:tracking-[-0.08em]">
            <span className="text-[7.2vw] md:text-[54px]">
            一福の柿の葉茶は
            </span>
            <br />
            <span className="text-[7.2vw] md:text-[54px] text-[#ED3636]  md:pl-[185px] pl-[100px]">
              様々な味
            </span>
            を楽しめます。
          </h2>
        </div>
        <div className="fade-up flex justify-center mt-5 md:mt-12">
          <p className="md:text-[20px] text-[17px] font-light max-w-[960px] md:leading-relaxed px-4">
            一福の柿の葉茶は、様々な生産地の柿の葉を原材料として扱っています。柿の葉茶は産地によって、葉の厚みや香りが違うのでそれぞれ、様々な風味を楽しめます。
            <br />
            <br />
            お好みによって産地の違いを感じつつ楽しんで頂ければと思います。
          </p>
        </div>
        <div className="md:mt-[130px] mt-[40px]">
          <div className="w-full md:max-w-[1010px] max-w-[400px] mx-auto md:space-y-[86px] space-y-[40px]">
            {data.map((item, index) => (
                <div
                className={`p-[18px] md:p-[70px] bg-cover`} style={{backgroundImage:`url(/assets/images/img-flavors-${item.id}.png)`}} key={index}
              >
                <div className="md:border-8 border-4 border-[#D2BF1F] py-5 md:py-[30px] px-3 md:px-8 bg-white">
                  <div className="flex justify-between pb-2 md:pb-3.5 border-b-[3px] border-[#D2BF1F]">
                    <div className="fade-up py-2">
                      <div className="flex items-end font-mincho gap-4">
                        <p className="md:text-[32px] text-[18px]">{item.from}</p>
                        <p className="md:text-[24px] text-[14px]">柿の葉茶</p>
                      </div>
                      <div className="text-[#72971C] md:text-[24px] text-[13px] font-mincho italic">
                        Persimmon leaves from {item.name}
                      </div>
                    </div>
                    <div className="fade-up max-md:-mr-3">
                      <img
                        className="max-md:w-[90px]"
                        src="/assets/images/img-flavors-leaf.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <p className="fade-up md:text-[23px] text-[14px] font-bold font-mincho md:px-4 px-3 md:py-6 py-4 md:mb-14 mb-8 md:min-h-[176px] min-h-[128px]">
                      {item.body}
                    </p>
                    <div className="fade-up flex justify-center md:mb-12 mb-10 max-md:px-3">
                      <div className="md:text-[22px] text-[13px] font-mincho font-bold leading-relaxed w-full max-w-[533px]">
                        <p className="flex">
                          <span>香り ｜</span>
                          <span className="flex-1">{item.details.scent}</span>
                        </p>
                        <p className="flex">
                          <span>味わい ｜</span>
                          <span className="flex-1">{item.details.taste}</span>
                        </p>
                        <p className="flex">
                          <span>原産地 ｜</span>
                          <span className="flex-1">{item.details.place}</span>
                        </p>
                        <p className="flex">
                          <span>焙煎の度合い ｜</span>
                          <span className="flex-1">{item.details.degree}</span>
                        </p>
                      </div>
                    </div>
                    <div className="fade-up relative flex justify-end md:px-2">
                      {item.footer}
                      <figure className="relative">
                        <img
                          className="max-md:max-w-[120px]"
                          src={item.image}
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    );
  }
  