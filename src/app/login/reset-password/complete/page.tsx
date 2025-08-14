import { ButtonItem } from "@/components/common/ButtonItem";

export default function Complete() {
    return (
        <main>
            <section className="md:my-[180px] my-20 px-5 md:text-[24px] text-[18px] text-center">
                <div className="w-full max-w-[1320px] mx-auto pb-20 md:pb-[120px]">
                    <div className="flex items-center gap-8 md:gap-10 flex-col">
                        <div className="flex items-center gap-1 md:gap-4 justify-center max-md:flex-col">
                            <span><img src="/assets/images/ic-check.svg" alt="" /></span>
                            <p className="md:text-[32px] text-[24px] font-bold text-[#3E7976]">パスワードの再設定が完了しました</p>
                        </div>
                        <div className="">
                            <ButtonItem link="/login">ログイン画面へ</ButtonItem>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
