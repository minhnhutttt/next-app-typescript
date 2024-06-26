"use client";
import React, { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useModal } from "@/context/ModalContext";

const ModalForm = () => {
  const { isOpen, closeModal } = useModal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    memorialMonitorPlan: '【先着50名様で締切】メモリアルモニタープランに申し込みたい',
    entryPlan: 'エントリープランに申し込みたい',
    standardPlan: 'スタンダードプランに申し込みたい',
    realMemorialHome: '現実の供養所オプション希望',
    otherQuestions: 'その他のご質問・お問い合わせ希望',
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData") || "{}");
    setFormData(savedData);
  }, []);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      const newData = { ...prevData, [name]: value };
      localStorage.setItem("formData", JSON.stringify(newData));
      return newData;
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("フォームが送信されました！");
    closeModal();
  };

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-[1040px] w-full relative border bg-white px-5 h-[90%] overflow-auto rounded-3xl py-10 [box-shadow:0px_4px_60px_0px_rgba(0,_0,_0,_0.10)]">
          <button onClick={closeModal} className="active group absolute right-5 top-5 z-30 md:h-6 w-6 h-4 md:w-8">
            <span className="absolute left-0 top-0 block h-0.5 w-full -translate-y-1/2 bg-black transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45"></span>
            <span className="absolute bottom-0 left-0 block h-0.5 w-full -translate-y-1/2 bg-black transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45"></span>
          </button>
          <form id="myForm" onSubmit={handleSubmit}>
            <div className="border-b border-[#F12929] md:pb-10 pb-6">
              <p className="text-center md:text-[60px] text-[30px] font-bold">
                お申し込みフォーム
              </p>
              <p className="text-center md:text-[16px] text-[13px] leading-[2] mt-4">
                当サービスにご興味をもっていただきありがとうございます。
                <br />
                1営業日以内に担当者よりご連絡を差し上げます。
                <br />
                ※お問い合わせ希望の方もこちらからフォームをご送信ください。
              </p>
            </div>
            <div className="md:pt-10 pt-6 w-full max-w-[576px] mx-auto">
              <p className="text-center md:text-[18px] text-[14px]">
                <span className="font-bold md:text-[30px] text-[20px] text-[#C92D2D]">
                  *
                </span>
                印は、必須項目です。
              </p>
              <div className="md:mt-5 mt-4 space-y-5">
                <div>
                    <label
                    htmlFor="name"
                    className="block md:text-[18px] text-[14px] mb-1"
                    >
                    お名前
                    <span className="font-bold md:text-[30px] text-[20px] text-[#C92D2D]">
                        *
                    </span>
                    </label>
                    <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="block w-full md:h-[76px] h-[50px] rounded-[10px] px-7 bg-[#EFF2F6]"
                        placeholder="山田　太郎"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    </div>
                </div>
                <div>
                    <label
                    htmlFor="email"
                    className="block md:text-[18px] text-[14px] mb-1"
                    >
                    メールアドレス
                    <span className="font-bold md:text-[30px] text-[20px] text-[#C92D2D]">
                        *
                    </span>
                    </label>
                    <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="block w-full md:h-[76px] h-[50px] rounded-[10px] px-7 bg-[#EFF2F6]"
                        placeholder="abc@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    </div>
                    <span className="block pt-2 px-2 text-[12px]">
                        携帯キャリアメールアドレスはメールが届きづらいため、Gmail、Yahoo!メールなどPCメールアドレスを推奨いたします。 <br />
                        ※携帯キャリアメールアドレス：@docomo.ne.jp / @ezweb.ne.jp / @softbank.ne.jp など
                        </span>
                </div>
                <div>
                    <label
                    htmlFor="tel"
                    className="block md:text-[18px] text-[14px] mb-1"
                    >
                    電話番号
                    </label>
                    <div>
                    <input
                        type="text"
                        id="tel"
                        name="tel"
                        className="block w-full md:h-[76px] h-[50px] rounded-[10px] px-7 bg-[#EFF2F6]"
                        placeholder="090-1234-5678"
                        value={formData.tel}
                        onChange={handleChange}
                    />
                    </div>
                </div>
                <div>
                    <p
                    className="block md:text-[18px] text-[14px] mb-1"
                    >
                    お申し込みのご希望など <span className="font-bold md:text-[30px] text-[20px] text-[#C92D2D]">
                        *
                    </span>
                    </p>
                    <div className="md:space-y-6 space-y-3 md:mt-5 mt-3">
                        <label htmlFor="plan1" className="flex items-center gap-3">
                            <p>
                                <span className="block md:size-[30px] size-5 relative">
                                    <input
                                        id="plan1"
                                        name="memorialMonitorPlan"
                                        type="checkbox"
                                        value={formData.memorialMonitorPlan}
                                        onChange={handleChange}
                                        className="peer opacity-0 md:size-[30px] size-5 cursor-pointer z-20"
                                    />
                                    <span className="hidden peer-checked:block absolute w-full h-full inset-0 cursor-pointer">
                                        <img src="/assets/images/checkbox.svg" alt="" />
                                    </span>
                                    <span className="peer-checked:hidden  absolute w-full h-full inset-0 cursor-pointer">
                                        <img src="/assets/images/uncheckbox.svg" alt="" />
                                    </span>
                                </span>
                            </p>
                            <p className="md:text-[20px] text-[14px] md:whitespace-nowrap">【先着50名様で締切】メモリアルモニタープランに申し込みたい</p>
                        </label>
                        <label htmlFor="plan2" className="flex items-center gap-3">
                            <p>
                                <span className="block md:size-[30px] size-5 relative">
                                    <input
                                        id="plan2"
                                        name="entryPlan"
                                        type="checkbox"
                                        value={formData.entryPlan}
                                        onChange={handleChange}
                                        className="peer opacity-0 md:size-[30px] size-5 cursor-pointer z-20"
                                    />
                                    <span className="hidden peer-checked:block absolute w-full h-full inset-0 cursor-pointer">
                                        <img src="/assets/images/checkbox.svg" alt="" />
                                    </span>
                                    <span className="peer-checked:hidden  absolute w-full h-full inset-0 cursor-pointer">
                                        <img src="/assets/images/uncheckbox.svg" alt="" />
                                    </span>
                                </span>
                            </p>
                            <p className="md:text-[20px] text-[14px] md:whitespace-nowrap">エントリープランに申し込みたい</p>
                        </label>
                        <label htmlFor="plan3" className="flex items-center gap-3">
                            <p>
                                <span className="block md:size-[30px] size-5 relative">
                                    <input
                                        id="plan3"
                                        name="standardPlan"
                                        type="checkbox"
                                        value={formData.standardPlan}
                                        onChange={handleChange}
                                        className="peer opacity-0 md:size-[30px] size-5 cursor-pointer z-20"
                                    />
                                    <span className="hidden peer-checked:block absolute w-full h-full inset-0 cursor-pointer">
                                        <img src="/assets/images/checkbox.svg" alt="" />
                                    </span>
                                    <span className="peer-checked:hidden  absolute w-full h-full inset-0 cursor-pointer">
                                        <img src="/assets/images/uncheckbox.svg" alt="" />
                                    </span>
                                </span>
                            </p>
                            <p className="md:text-[20px] text-[14px] md:whitespace-nowrap">スタンダードプランに申し込みたい</p>
                        </label>
                        <label htmlFor="plan4" className="flex items-center gap-3">
                            <p>
                                <span className="block md:size-[30px] size-5 relative">
                                    <input
                                        id="plan4"
                                        name="realMemorialHome"
                                        type="checkbox"
                                        value={formData.realMemorialHome}
                                        onChange={handleChange}
                                        className="peer opacity-0 md:size-[30px] size-5 cursor-pointer z-20"
                                    />
                                    <span className="hidden peer-checked:block absolute w-full h-full inset-0 cursor-pointer">
                                        <img src="/assets/images/checkbox.svg" alt="" />
                                    </span>
                                    <span className="peer-checked:hidden  absolute w-full h-full inset-0 cursor-pointer">
                                        <img src="/assets/images/uncheckbox.svg" alt="" />
                                    </span>
                                </span>
                            </p>
                            <p className="md:text-[20px] text-[14px] md:whitespace-nowrap">現実の供養所オプション希望</p>
                        </label>
                        <label htmlFor="plan5" className="flex items-center gap-3">
                            <p>
                                <span className="block md:size-[30px] size-5 relative">
                                    <input
                                        id="plan5"
                                        name="otherQuestions"
                                        type="checkbox"
                                        value={formData.otherQuestions}
                                        onChange={handleChange}
                                        className="peer opacity-0 md:size-[30px] size-5 cursor-pointer z-20"
                                    />
                                    <span className="hidden peer-checked:block absolute w-full h-full inset-0 cursor-pointer">
                                        <img src="/assets/images/checkbox.svg" alt="" />
                                    </span>
                                    <span className="peer-checked:hidden  absolute w-full h-full inset-0 cursor-pointer">
                                        <img src="/assets/images/uncheckbox.svg" alt="" />
                                    </span>
                                </span>
                            </p>
                            <p className="md:text-[20px] text-[14px] md:whitespace-nowrap">その他のご質問・お問い合わせ希望</p>
                        </label>
                    </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center md:mt-14 mt-8">
                    <div className="space-y-5">
                        <label htmlFor="terms" className="flex items-center gap-3">
                            <p>
                                <span className="block md:size-[30px] size-5 relative">
                                    <input
                                        id="terms"
                                        name="terms"
                                        type="checkbox"
                                        required
                                        className="peer opacity-0 md:size-[30px] size-5 cursor-pointer z-20"
                                    />
                                    <span className="hidden peer-checked:block absolute w-full h-full inset-0 cursor-pointer">
                                        <img src="/assets/images/checkbox.svg" alt="" />
                                    </span>
                                    <span className="peer-checked:hidden  absolute w-full h-full inset-0 cursor-pointer">
                                        <img src="/assets/images/uncheckbox.svg" alt="" />
                                    </span>
                                </span>
                            </p>
                            <p className="md:text-[20px] text-[14px] md:whitespace-nowrap"><a href="/terms-of-service" className="">利用規約</a>に同意する</p>
                        </label>
                        <label htmlFor="policy" className="flex items-center gap-3">
                            <p>
                                <span className="block md:size-[30px] size-5 relative">
                                    <input
                                        id="policy"
                                        name="policy"
                                        type="checkbox"
                                        required
                                        className="peer opacity-0 md:size-[30px] size-5 cursor-pointer z-20"
                                    />
                                    <span className="hidden peer-checked:block absolute w-full h-full inset-0 cursor-pointer">
                                        <img src="/assets/images/checkbox.svg" alt="" />
                                    </span>
                                    <span className="peer-checked:hidden  absolute w-full h-full inset-0 cursor-pointer">
                                        <img src="/assets/images/uncheckbox.svg" alt="" />
                                    </span>
                                </span>
                            </p>
                            <p className="md:text-[20px] text-[14px] md:whitespace-nowrap"><a href="/privacy-policy" className="">プライバシーポリシーに同意する</a></p>
                        </label>
                    </div>
                </div>
            <div className="flex justify-center md:mt-10 mt-5">
                <input type="submit" value="送信する" className="cursor-pointer flex items-cenrer justify-center font-bold w-[300px] md:h-[68px] h-[54px] md:text-[24px] text-[18px] text-white bg-[#F12929] rounded-[10px]"/>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ModalForm;
