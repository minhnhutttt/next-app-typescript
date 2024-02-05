import { ReactNode } from "react";

type CouponItemPropsType = {
    image: string;
    title: string;
    children: ReactNode;
};
function CouponItem({image, title, children}: CouponItemPropsType) {
    return (
        <div className="max-w-[430px] bg-[#FFFAF1] bg-[linear-gradient(-135deg,_#FF4CB0_40px,_transparent_0),_linear-gradient(45deg,_#FF4CB0_40px,_transparent_0)] md:bg-[linear-gradient(-135deg,_#FF4CB0_70px,_transparent_0),_linear-gradient(45deg,_#FF4CB0_70px,_transparent_0)] rounded-2xl [box-shadow:0px_4px_40px_0px_rgba(0,_0,_0,_0.08)] overflow-hidden flex flex-col items-center justify-center md:min-h-[320px] p-10">
            <figure>
                <img className="max-md:w-[80px]" src={image} alt={title} />
            </figure>
            <h5 className="text-center md:text-[18px] text-[16px] font-bold py-4 leading-none">{title}</h5>
            <p className="w-full max-w-[300px] md:text-[16px] text-[14px]">
                {children}
            </p>
        </div>
    )
}

export default function Items() {
    return (
      <section className="md:py-[100px] py-[50px] px-5">
        <div className="w-full max-w-[1260px] mx-auto bg-[url('/images/bg-05.png')] border-[10px] border-[#FFCBEB] md:rounded-[60px] rounded-[32px] pt-[7vw] md:pt-[90px] md:pb-[133px] pb-[10vw] px-5">
            <div className="flex justify-center flex-col items-center">
                <h5 className="text-center bg-[url('/images/line.png')] max-md:bg-[length:auto_16px] bg-no-repeat bg-bottom md:text-[24px] [font-size:_clamp(12px,4.2vw,20px)] font-bold py-6 md:py-9 md:px-10 tracking-widest">とってもかんたん、とっても便利</h5>
                <h4 className="lg:text-[48px] md:text-[36px] [font-size:_clamp(20px,4.6vw,28px)] font-bold tracking-widest">
                    <p>次世代クーポンなら</p>
                    <p className="ml-[10vw] md:ml-[200px]">こんなことができます</p>
                </h4>
            </div>
            <div className="w-full md:max-w-[960px] max-w-[430px] mx-auto grid md:grid-cols-2 mt-[8vw] md:mt-[94px] min-[1440px]:gap-[100px] gap-[6.944vw]">
                <CouponItem image="/images/item-01.png" title="みんなと共有できる">
                幸せのおすそ分け！クーポンをQRコードで友達に簡単に送ることができます。
                </CouponItem>
                <CouponItem image="/images/item-02.png" title="限定クーポン">
                位置情報付きクーポンも！お店でしかもらえない「お得意さま限定クーポン」をゲットできます。
                </CouponItem>
                <CouponItem image="/images/item-03.png" title="個人情報の登録が不要">
                どのクーポンを使ったかは内緒。個人を特定できる情報をお店に取得されることはありません。
                </CouponItem>
                <CouponItem image="/images/item-04.png" title="アプリで一括管理">
                アプリで簡単管理！クーポンをまとめて管理できるから、使いたい時にすぐ使えます。
                </CouponItem>
            </div>
        </div>
      </section>
    );
  }
  