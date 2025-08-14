"use client";
import { Button } from "@/components/common/Button";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import {  useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "@/components/common/Modal";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z
    .string()
    .min(1, "アカウントとパスワードを入力してください")
    .email("正しいメールアドレスを入力してください"),
  password: z.string().min(1, "アカウントとパスワードを入力してください"),
  passwordConfirm: z.string().min(1, "アカウントとパスワードを入力してください"),
  agreeTos: z.boolean().refine((v) => v, "利用規約とプライバシーポリシーに同意してください"),
  agreePrivacy: z.boolean().refine((v) => v, "利用規約とプライバシーポリシーに同意してください"),
}).refine((data) => data.password === data.passwordConfirm, {
  message: "パスワードが一致しません",
  path: ["passwordConfirm"],
});

type FormData = z.infer<typeof schema>;

export default function Register() {
  const ref = useScrollAnimations();

  const [showPassword, setShowPassword] = useState(false); 
  const [showPasswordModal, setShowPasswordModal] = useState(false); 
  const [isModalRegisterOpen, setModalRegisterOpen] = useState(false);
const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      agreeTos: false,
      agreePrivacy: false,
    },
  });

  const emailVal = watch("email");
  const passwordVal = watch("password");

  const unifiedError = useMemo(() => {
    return (
      errors.email?.message ||
      errors.password?.message ||
      errors.passwordConfirm?.message ||
      errors.agreeTos?.message ||
      errors.agreePrivacy?.message ||
      ""
    );
  }, [errors]);

  const openConfirmModal = handleSubmit(() => {
    setShowPasswordModal(false);
    setModalRegisterOpen(true);
  });

  const onSubmit = async (data: FormData) => {
    setModalRegisterOpen(false);
    router.push("/register/mail-sent");
  };


  return (
    <main ref={ref}>
      <section className="md:my-[180px] my-20 px-5  md:text-[24px] text-[18px]">
        <div className="w-full max-w-[1320px] mx-auto pb-20 md:pb-[120px]">
          <div className="flex items-center gap-[60px] md:gap-20 flex-col">
            <div className="text-center">
              バイヤー登録をすると<span className="font-bold">商品のお問い合わせや価格情報の閲覧、AI検索</span>など便利にご利用いただけます。<br />
              <br />
              まずは以下をご入力・ご同意いただき、仮登録をお願いいたします。
            </div>

            <div className="md:text-[24px] text-[18px] font-bold md:space-y-10 space-y-4 w-[305px] md:w-[500px]">
              {/* Email */}
              <div className="space-y-3">
                <div className="flex">
                  <label htmlFor="email" className="px-2 md:px-4">
                    メールアドレス
                  </label>
                </div>
                <div>
                  <input
                    id="email"
                    type="text"
                    {...register("email")}
                    className={`w-full border-2 rounded-[10px] h-[50px] md:h-[60px] font-normal md:px-4 px-3 ${
                      errors.email ? "border-red-500" : "border-[#ccc]"
                    }`}
                    placeholder="example@gmail.com"
                    aria-invalid={!!errors.email}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-3">
                <div className="flex">
                  <label htmlFor="password" className="px-2 md:px-4">
                    パスワード
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    className={`w-full border-2 rounded-[10px] h-[50px] md:h-[60px] font-normal md:px-4 px-3 pr-12 ${
                      errors.password ? "border-red-500" : "border-[#ccc]"
                    }`}
                    placeholder="●●●●●●●●"
                    aria-invalid={!!errors.password}
                  />
                  <div
                    className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer max-md:w-6"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <img src="/assets/images/ic-eye-open.svg" alt="Hide password" />
                    ) : (
                      <img src="/assets/images/ic-eye-close.svg" alt="Show password" />
                    )}
                  </div>
                </div>
              </div>

              {/* Password confirm */}
              <div className="space-y-3">
                <div className="flex">
                  <label htmlFor="passwordConfirm" className="px-2 md:px-4">
                    パスワード 確認用
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="passwordConfirm"
                    type={showPassword ? "text" : "password"}
                    {...register("passwordConfirm")}
                    className={`w-full border-2 rounded-[10px] h-[50px] md:h-[60px] font-normal md:px-4 px-3 pr-12 ${
                      errors.passwordConfirm ? "border-red-500" : "border-[#ccc]"
                    }`}
                    placeholder="●●●●●●●●"
                    aria-invalid={!!errors.passwordConfirm}
                  />
                  <div
                    className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer max-md:w-6"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <img src="/assets/images/ic-eye-open.svg" alt="Hide password" />
                    ) : (
                      <img src="/assets/images/ic-eye-close.svg" alt="Show password" />
                    )}
                  </div>
                </div>
              </div>

              {unifiedError && (
                <p className="text-[#D43A3A] text-center mt-2">{unifiedError}</p>
              )}
            </div>
          </div>

          <div className="font-bold mt-[60px] space-y-5">
            <div className="flex items-center gap-3 justify-center">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only" {...register("agreeTos")} />
                <div className="size-8 border border-[#666] flex items-center justify-center transition-colors duration-200 bg-white rounded md:rounded-lg">
                  {watch("agreeTos") && (
                    <img className="max-md:w-[16px] md:size-5" src="/assets/images/ic-check.svg" alt="" />
                  )}
                </div>
                <p className="ml-3">
                  <a href="/terms-of-service" target="_blank" className="text-[#0A7DBB]">利用規約</a>に同意する
                </p>
              </label>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only" {...register("agreePrivacy")} />
                <div className="size-8 border border-[#666] flex items-center justify-center transition-colors duration-200 bg-white rounded md:rounded-lg">
                  {watch("agreePrivacy") && (
                    <img className="max-md:w-[16px] md:size-5" src="/assets/images/ic-check.svg" alt="" />
                  )}
                </div>
                <p className="ml-3">
                  <a href="/privacy-policy" target="_blank" className="text-[#0A7DBB]">プライバシーポリシー</a>に同意する
                </p>
              </label>
            </div>
          </div>

          <div className="flex justify-center max-md:flex-col-reverse items-center md:gap-11 gap-2 md:mt-10 mt-5">
            <Button sm type={0} onClick={openConfirmModal}>
              仮登録する
            </Button>
          </div>

          <div className="flex justify-center">
            <a href="/login" className="text-center text-[#0A7DBB] mt-6">
              すでに登録されている方はこちら
            </a>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalRegisterOpen} onClose={() => setModalRegisterOpen(false)}>
        <p className="md:text-[24px] text-[18px] md:mt-3 mt-2 md:mb-[50px] mb-10 text-center">
          下記の内容で登録いたします。<br />よろしいですか？
        </p>

        <div className="space-y-6 md:text-[24px] text-[18px] font-bold w-[305px] md:w-[500px] mx-auto text-left">
          <div className="space-y-2">
            <label className="px-2 md:px-4 block">メールアドレス</label>
            <input
              type="text"
              readOnly
              value={emailVal}
              className="w-full border-2 border-[#ccc] rounded-[10px] h-[50px] md:h-[60px] font-normal md:px-4 px-3 bg-gray-50"
            />
          </div>

          <div className="space-y-2">
            <label className="px-2 md:px-4 block">パスワード</label>
            <div className="relative">
              <input
                type={showPasswordModal ? "text" : "password"}
                readOnly
                value={passwordVal}
                className="w-full border-2 border-[#ccc] rounded-[10px] h-[50px] md:h-[60px] font-normal md:px-4 px-3 pr-12 bg-gray-50"
              />
              <button
                type="button"
                className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer max-md:w-6"
                onClick={() => setShowPasswordModal((s) => !s)}
                aria-label={showPasswordModal ? "パスワードを非表示" : "パスワードを表示"}
              >
                {showPasswordModal ? (
                  <img src="/assets/images/ic-eye-open.svg" alt="" />
                ) : (
                  <img src="/assets/images/ic-eye-close.svg" alt="" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-5 max-md:flex-col mt-10">
          <Button
            onClick={() => setModalRegisterOpen(false)}
            type={1}
          >
            入力に戻る
          </Button>

          <Button type={0} onClick={handleSubmit(onSubmit)}>次に進む</Button>
        </div>
      </Modal>
    </main>
  );
}
