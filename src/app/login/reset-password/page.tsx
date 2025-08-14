"use client";
import { Button } from "@/components/common/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

const schema = z
  .object({
    password: z.string().min(1, "パスワードを入力してください"),
    passwordConfirm: z.string().min(1, "パスワード（確認用）を入力してください"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "パスワードが一致しません",
    path: ["passwordConfirm"],
  });

type FormData = z.infer<typeof schema>;

export default function ResetPassword() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: { password: "", passwordConfirm: "" },
  });

  const unifiedError = useMemo(
    () => errors.password?.message || errors.passwordConfirm?.message || "",
    [errors]
  );

  const onSubmit = async (_data: FormData) => {
    // TODO: call API reset pass nếu có
    router.push("/login/reset-password/complete");
  };

  return (
    <main>
      <section className="md:my-[180px] my-20 px-5 md:text-[24px] text-[18px]">
        <div className="w-full max-w-[1320px] mx-auto pb-20 md:pb-[120px] border-b border-[#666]">
          <div className="flex items-center gap-8 md:gap-10 flex-col">
            <p className="text-center">下記に新しいパスワードのご入力をお願いいたします。</p>

            {/* Password */}
            <div className="space-y-3 w-full max-w-md">
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
            <div className="space-y-3 w-full max-w-md">
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

            {unifiedError && <p className="text-[#D43A3A] ">{unifiedError}</p>}

            <Button sm type={0} onClick={handleSubmit(onSubmit)}>
              送信する
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
