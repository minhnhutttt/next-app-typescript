"use client";
import { Button } from "@/components/common/Button";
import { useAuth } from "@/context/AuthContext";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z
    .string()
    .min(1, "アカウントとパスワードを入力してください")
    .email("正しいメールアドレスを入力してください"),
  password: z.string().min(1, "アカウントとパスワードを入力してください"),
});

type FormData = z.infer<typeof schema>;

export default function Login() {
  const ref = useScrollAnimations();
  const router = useRouter();
  const { isLoggedIn, login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onSubmit", 
    reValidateMode: "onChange",
    defaultValues: { email: "", password: "" },
  });

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/mypage");
    }
  }, [isLoggedIn, router]);

  const errorMessage = useMemo(
    () => errors.email?.message || errors.password?.message || "",
    [errors]
  );

  const onSubmit = async (data: FormData) => {
    login();
    router.push("/mypage");
  };

  return (
    <main ref={ref}>
      <section className="md:my-[180px] my-20 px-5  md:text-[24px] text-[18px]">
        <div className="w-full max-w-[1320px] mx-auto pb-20 md:pb-[120px] border-b border-[#666]">
          <div className="flex items-center gap-[60px] md:gap-20 flex-col">
            <div className="md:text=[32px] text-[24px] font-bold text-center">
              バイヤー登録されているお客様
            </div>

            <div className="md:text-[24px] text-[18px] font-bold md:space-y-10 space-y-4 w-[305px] md:w-[500px]">
              <div className="space-y-3">
                <div className="flex">
                  <label htmlFor="email" className="px-2 md:px-4">メールアドレス</label>
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

              <div className="space-y-3">
                <div className="flex">
                  <label htmlFor="password" className="px-2 md:px-4">パスワード</label>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    className={`w-full border-2 rounded-[10px] h-[50px] md:h-[60px] font-normal md:px-4 px-3 ${
                      errors.password ? "border-red-500" : "border-[#ccc]"
                    }`}
                    placeholder="●●●●●●●●"
                    aria-invalid={!!errors.password}
                  />
                  <div
                    className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer max-md:w-6"
                    onClick={() => setShowPassword(prev => !prev)}
                  >
                    {showPassword ? (
                      <img src="/assets/images/ic-eye-open.svg" alt="Hide password" />
                    ) : (
                      <img src="/assets/images/ic-eye-close.svg" alt="Show password" />
                    )}
                  </div>
                </div>
              </div>

              {errorMessage && (
                <p className="text-[#D43A3A] text-center mt-2">{errorMessage}</p>
              )}
            </div>
          </div>

          <div className="flex justify-center max-md:flex-col-reverse items-center md:gap-11 gap-2 md:mt-10 mt-5">
            <Button
              onClick={handleSubmit(onSubmit)}
              sm
              type={0}
            >
              ログイン
            </Button>
          </div>

          <div className="flex justify-center">
            <a href="/login/forgot" className="text-center text-[#0A7DBB] mt-6">
              パスワードをお忘れの方はこちら
            </a>
          </div>
        </div>

        <div className="w-full max-w-[1320px] mx-auto py-20 text-center">
          <p className="text-[#D43A3A] font-bold">まだバイヤー登録をされていないお客様</p>
          <p className="mt-3">
            バイヤー登録をすると<span className="font-bold">商品のお問い合わせや価格情報の閲覧、AI検索</span>など便利にご利用いただけます。
          </p>
          <div className="flex justify-center max-md:flex-col-reverse items-center md:gap-11 gap-2 md:mt-10 mt-5">
            <Button link="/register" sm type={0}>新規バイヤー登録する</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
