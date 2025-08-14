export default function MailSent() {
    return (
        <main>
            <section className="md:my-[180px] my-20 px-5 md:text-[24px] text-[18px] text-center">
                <div className="w-full max-w-[1320px] mx-auto pb-20 md:pb-[120px] border-b border-[#666]">
                    <div className="flex items-center gap-8 md:gap-10 flex-col">
                        <div className="flex items-center gap-1 md:gap-4 justify-center max-md:flex-col">
                            <span><img src="/assets/images/ic-mail.svg" alt="" /></span>
                            <p className="md:text-[32px] text-[24px] font-bold text-[#3E7976]">パスワード再設定メールを送信しました</p>
                        </div>

                        <p className="text-center">
                            ご入力いただいた下記メールアドレスに、<span className="font-bold">パスワード再設定メール</span>を送信しました。<br />
                            <br />
                            <span className="font-bold">exmple@gmail.com</span><br />
                            <br />
                            お手数おかけしますが、メールボックスをご確認いただき、<br />
                            <span className="font-bold">記載されたURL</span>をクリックしてパスワード再設定手続きをお願いいたします。
                        </p>
                    </div>
                </div>
                <div className="w-full max-w-[1320px] mx-auto py-20 text-center">
                    <div className="flex items-center gap-8 md:gap-10 flex-col">
                        <div className="flex items-center gap-1 md:gap-4 justify-center max-md:flex-col">
                            <span><img src="/assets/images/ic-question.svg" alt="" /></span>
                            <p className="md:text-[32px] text-[24px] font-bold ">メールが届いていない場合は…</p>
                        </div>
                        <p className="text-center max-md:text-[16px]">
                            恐縮ですが、下記をご確認いただきますようお願いいたします。<br />
                            <br />
                            ・迷惑メールフォルダに分類されていないか<br />
                            ・ご入力になったメールアドレスに誤りがないか
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
