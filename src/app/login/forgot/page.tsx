"use client";
import { Button } from "@/components/common/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .email("正しいメールアドレスを入力してください"),
});

type FormData = z.infer<typeof schema>;

export default function Forgot() {
    
    const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: FormData) => {
    router.push("/login/forgot/mail-sent");
  };

  return (
    <main>
      <section className="md:my-[180px] my-20 px-5 md:text-[24px] text-[18px]">
        <div className="w-full max-w-[1320px] mx-auto pb-20 md:pb-[120px] border-b border-[#666]">
          <div className="flex items-center gap-8 md:gap-10 flex-col">
            <p className="text-center">
              お手数おかけしますが、
              <span className="font-bold">パスワード再設定用のURL</span>
              を送らせていただきますので、<br />
              <span className="font-bold">ご登録されているメールアドレス</span>
              のご入力をお願いいたします。
            </p>

            <div className="w-full max-w-md">
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

              {errors.email && (
                <p className="text-[#D43A3A]">{errors.email.message}</p>
              )}
            <Button
              sm
              type={0}
              onClick={handleSubmit(onSubmit)}
            >
              送信する
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
