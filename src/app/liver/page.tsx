"use client"

import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        image: '/assets/images/9ef2c16.jpg',
        name: '.mike.ꪔ̤',
        link: 'https://17.live/s/u/9ef2c16f-e1cc-49c6-b4f0-0bf6c6c60089'
    },
    {
        image: '/assets/images/39ad4957.jpg',
        name: '∞∞🦋のの💜nono🐝∞∞',
        link: 'https://17.live/s/u/39ad4957-edf6-4ea4-89d1-8fabdb114439'
    },
    {
        image: '/assets/images/445746a0.jpg',
        name: 'ゆうき🐱🍀🤎',
        link: 'https://17.live/s/u/445746a0-446c-4e08-af22-5638966e4c33'
    },
    {
        image: '/assets/images/0cf05a87.jpg',
        name: 'REiYAN',
        link: 'https://17.live/s/u/0cf05a87-e8fc-49b8-8d9b-6aec50f22be0'
    },
    {
        image: '/assets/images/a44b4b9a.jpg',
        name: '💫FUUKA🍃🌹',
        link: 'https://17.live/s/u/a44b4b9a-eb0a-4c63-91d1-f9eb8f7bc758'
    },
    {
        image: '/assets/images/94502084.jpg',
        name: 'りり🌈🌻RIRI🐿️',
        link: 'https://17.live/s/u/94502084-c166-4328-928b-7e89b2c15f56'
    },
    {
        image: '/assets/images/efd145f1.jpg',
        name: '.りさ🌷👗💘',
        link: 'https://17.live/s/u/efd145f1-8df9-4bb8-b6e0-7c753d327d6f'
    },
    {
        image: '/assets/images/80c04a37.jpg',
        name: 'ぽて🌱ラヴァ..🧡',
        link: 'https://17.live/s/u/80c04a37-7def-4a6e-89c1-48fc0c95536e'
    },
    {
        image: '/assets/images/a2d06171.jpg',
        name: 'まりたす🍓🐶💝',
        link: 'https://17.live/s/u/a2d06171-60cc-47b8-aae0-fc62ac5716d6'
    },
    {
        image: '/assets/images/e39dbc9d.jpg',
        name: 'みのり🌷🫧Minori',
        link: 'https://17.live/s/u/e39dbc9d-37bd-4069-86a2-4cc99e53115e'
    },
    {
        image: '/assets/images/b5239b3b.jpg',
        name: 'なあ🌺Naaa🥥',
        link: 'https://17.live/s/u/b5239b3b-44b4-4ce0-a774-31e94b8bed00'
    },
    {
        image: '/assets/images/cc4b9ccc.jpg',
        name: 'ゆちゃ🐶💋💜',
        link: 'https://17.live/s/u/cc4b9ccc-afed-41ab-ae46-2a0e1f5b6e14'
    },
    {
        image: '/assets/images/6c2d45d5.jpg',
        name: '美月🐬🌙✨Mitsuki',
        link: 'https://17.live/s/u/6c2d45d5-8722-49f5-b68c-f2b3af41f638'
    },
    {
        image: '/assets/images/4339940d.jpg',
        name: 'AKANE_017🦄🌈💜',
        link: 'https://17.live/s/u/4339940d-d577-4654-8e32-bd9273075cdf'
    },
    {
        image: '/assets/images/01a41991.jpg',
        name: 'しぃちゃん🤍💋🐈‍⬛',
        link: 'https://17.live/s/u/01a41991-8972-4b34-9ea0-1814ed1ce1b9'
    },
    {
        image: '/assets/images/a26f3b05.jpg',
        name: 'あや🦖🌻aya...👗',
        link: 'https://17.live/s/u/a26f3b05-ef48-4482-bc11-b1b875e79694'
    },
    {
        image: '/assets/images/08d5f713.jpg',
        name: '🤍なつ🤣🎙Natsu🤍',
        link: 'https://17.live/s/u/08d5f713-4f4a-435b-82e3-513bdb636677'
    },
    {
        image: '/assets/images/82b0ac24.jpg',
        name: '星奈きら🌟🐸asuna🐸',
        link: 'https://17.live/s/u/82b0ac24-d517-4b7a-8832-e093cee03f5d'
    },
    {
        image: '/assets/images/8df7463d.jpg',
        name: 'にな💍NINA🎤',
        link: 'https://17.live/s/u/8df7463d-1175-4797-b165-c59a58f2b251'
    },
    {
        image: '/assets/images/6f040eae.jpg',
        name: '桃宮🍑いちご🍓💕',
        link: 'https://17.live/s/u/6f040eae-ee45-46a1-9661-eecd0b818375'
    },
    {
        image: '/assets/images/5b46c105.jpg',
        name: '✨🌈のんち丸🐤♬*゜',
        link: 'https://17.live/s/u/5b46c105-45a0-4271-877c-9a2894243582'
    },
    {
        image: '/assets/images/3534e8e8.jpg',
        name: 'うの🐠‪💛',
        link: 'https://17.live/s/u/3534e8e8-1b1c-4cc4-bc7b-a3105287854c'
    },
    {
        image: '/assets/images/ba432c39_.jpg',
        name: 'なちゃん🇨🇦🐰Natsumi',
        link: 'https://17.live/s/u/ba432c39-198c-4e97-bb70-cd21cbdc9ee8'
    },
    {
        image: '/assets/images/4ece3410_.jpg',
        name: 'ぴな🍖💗pina🌴',
        link: 'https://17.live/s/u/4ece3410-4f83-46b7-b299-fefa6292ed9a'
    },
    {
        image: '/assets/images/6fc4b176_.jpg',
        name: 'むた🦕muta🌻',
        link: 'https://17.live/s/u/6fc4b176-bea8-4971-8ab8-2da6b1e5d343'
    },
    {
        image: '/assets/images/7851e0d7.jpg',
        name: '芽生🎀💕🥑mei',
        link: 'https://17.live/s/u/7851e0d7-23d8-4d5b-8fcd-2f0bf8ffdefd'
    },
    {
        image: '/assets/images/d895ccc5.jpg',
        name: '優愛🌷🐳💘Yua',
        link: 'https://17.live/s/u/d895ccc5-3ab3-4fd9-9344-d2fdd9a38be3'
    },
    {
        image: '/assets/images/2d03807f.jpg',
        name: 'oooo🦋ヒカル💫🌱oooo',
        link: 'https://17.live/s/u/2d03807f-635f-4bcd-a27f-297c2ceaa502'
    },
    {
        image: '/assets/images/ac0edf6b.jpg',
        name: 'せいな🎸🎧Seina🦎',
        link: 'https://17.live/s/u/ac0edf6b-23d5-4360-8fae-e4abb27c02a5'
    },
    {
        image: '/assets/images/11cb1ab4-8eea.jpg',
        name: '🐇エト⛩et🥂',
        link: 'https://17.live/s/u/11cb1ab4-8eea-4c42-a820-aead24c961fa'
    },
    {
        image: '/assets/images/3d1363ef.jpg',
        name: 'Juri🌹',
        link: 'https://17.live/s/u/3d1363ef-83c2-44c7-808a-759b8af132bf'
    },
]

export default function Liver() {
    const ref = useScrollAnimations();
  return (
    <main>
        <section ref={ref} className="pt-20 md:pt-[120px]">
            <div className="h-[5px] bg-[linear-gradient(90deg,_#FF7DD3_0%,_#3CE8FF_100%)]"></div>
            <div className="md:px-5 px-3 pb-[50px]">
                <div className="relative md:w-[510px] w-full mx-auto rounded-[10px] bg-[linear-gradient(90deg,_#FF7DD3_0%,_#3CE8FF_100%)] p-px flex items-center justify-center mt-5 [box-shadow:0px_4px_40px_0px_rgba(255,_125,_211,_0.20)]">
                    <div className="w-full h-full bg-white/90 rounded-[10px] pt-8 md:pt-[50px] md:px-5 px-3">
                        <Title>所属ライバー</Title>
                        <div className="flex justify-center items-center md:text-[21px] text-[18px] font-semibold gap-2 py-4">
                            <span><img className="md:w-20 w-16" src="/assets/images/17live-logo.svg" alt="" /></span>
                            <span>公式ライバー</span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 md:gap-x-[44px] gap-y-6 gap-3 mt-1">
                            {data.map((item,index) => (
                                <a href={item.link} className="fade-up relative" key={index}>
                                    <span className="relative block">
                                        <span className="absolute md:-right-2.5 -right-1.5 md:-bottom-2.5 -bottom-1.5 w-full h-full bg-[linear-gradient(90deg,_#FF7DD3_0%,_#3CE8FF_100%)] rounded-[24px] overflow-hidden"></span>
                                        <span className="block rounded-[24px] overflow-hidden relative z-10"><img src={item.image} alt="" /></span>
                                    </span>
                                    <span className="md:text-[16px] text-[14px] font-semibold text-center block my-5">{item.name}</span>
                                </a>
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
    </main>
  );
}
