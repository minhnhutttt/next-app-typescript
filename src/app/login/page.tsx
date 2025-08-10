"use client"
import { Button } from "@/components/common/Button";
import useScrollAnimations from "@/hooks/useScrollAnimations";

export default function Login() {

    const ref = useScrollAnimations()

    return (
        <main ref={ref}>
            <section className="md:my-[180px] my-20 px-5">
                <div className="w-full max-w-[1320px] mx-auto">
                    <div className="flex items-center gap-[60px] md:gap-20 flex-col">
                        <div className="md:text-[24px] text-[18px] font-bold md:space-y-6 space-y-4">
                                <div className="space-y-3">
                                    <div className="flex">
                                        <label htmlFor="" className="px-2 md:px-4">メールアドレス</label>
                                    </div>
                                    <div className=""><input type="text" className="w-full border-2 border-[#ccc] rounded-[10px] h-[50px] md:h-[60px] font-normal md:px-4 px-3" placeholder="例: example@example.com" /></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex">
                                        <label htmlFor="" className="px-2 md:px-4">パスワード</label>
                                    </div>
                                    <div className=""><input type="text" className="w-full border-2 border-[#ccc] rounded-[10px] h-[50px] md:h-[60px] font-normal md:px-4 px-3" placeholder="●●●●●●●●" /></div>
                                </div>
                                </div>
                    </div>
                    <div className="flex justify-center max-md:flex-col-reverse items-center md:gap-11 gap-2 md:mt-10 mt-5">
                        <Button link="/mypage" sm type={0}>ログイン</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
