'use client'

import { useState, ChangeEvent } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'

import { useRouter } from 'next/navigation'

import { z } from 'zod'

import { useModal } from '@/context/ModalContext'
import { contactSchema } from '@/lib/schemas'

interface FormData {
  name: string;
  email: string;
  tel: string;
  interests: string[];
}

interface ErrorMag {
  status: number
  message?: string
  issues?: z.ZodIssue[]
}

const ModalForm = () => {
  const router = useRouter()

  const { isOpen, closeModal } = useModal()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    tel: '',
    interests: [],
  })
  const [error, setError] = useState<ErrorMag>()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => {
      if (type === 'checkbox') {
        const interests = prevData.interests.includes(value)
          ? prevData.interests.filter((interest) => interest !== value)
          : [...prevData.interests, value];
        return { ...prevData, interests };
      } else {
        return { ...prevData, [name]: value };
      }
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      const parse = contactSchema.safeParse({
        name: formData.name,
        email: formData.email,
        tel: formData.tel,
        interests: formData.interests.join(',')
      })

      if (!parse.success) {
        setError({
          status: 400,
          message: '送信に失敗しました',
          issues: parse.error.issues,
        })
        return
      }

      const url = 'https://ssgform.com/s/0XYIAHf5TI8T'
  
      if (!url) throw new Error('必要な環境変数が設定されていません')

      const fd = new FormData();
      fd.append('お名前', formData.name);
      fd.append('メールアドレス', formData.email);

      if (formData.tel) {
        fd.append('電話番号', formData.tel);
      }

      fd.append('お申し込みのご希望など', formData.interests.join(','));
  
      const res = await fetch(url, {
        cache: 'no-store',
        method: 'POST',
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: fd
      })

      if (res.status == 200) {
        router.push('/thx')
        closeModal()
      } else {
        console.error(res)
        alert('フォームの送信に失敗しました。')
      }
    } catch (e) {
      console.error('Failed to send mail', e)
      return false
    } 
  }

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="relative h-[90%] w-full max-w-[1040px] overflow-auto rounded-3xl border bg-white px-5 py-10 [box-shadow:0px_4px_60px_0px_rgba(0,_0,_0,_0.10)]">
          <button
            onClick={closeModal}
            className="active group absolute right-5 top-5 z-30 h-4 w-6 md:h-6 md:w-8"
          >
            <span className="absolute left-0 top-0 block h-0.5 w-full -translate-y-1/2 bg-black transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45"></span>
            <span className="absolute bottom-0 left-0 block h-0.5 w-full -translate-y-1/2 bg-black transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45"></span>
          </button>
          <form id="myForm" method="post">
            <div className="border-b border-[#F12929] pb-6 md:pb-10">
              <p className="text-center text-[30px] font-bold md:text-[60px]">
                お申し込みフォーム
              </p>
              <p className="mt-4 text-center text-[13px] leading-[2] md:text-[16px]">
                当サービスにご興味をもっていただきありがとうございます。
                <br />
                1営業日以内に担当者よりご連絡を差し上げます。
                <br />
                ※お問い合わせ希望の方もこちらからフォームをご送信ください。
              </p>
            </div>
            <div className="mx-auto w-full max-w-[576px] pt-6 md:pt-10">
              <p className="text-center text-[14px] md:text-[18px]">
                <span className="text-[20px] font-bold text-[#C92D2D] md:text-[30px]">
                  *
                </span>
                印は、必須項目です。
              </p>
              <div className="mt-4 space-y-5 md:mt-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-[14px] md:text-[18px]"
                  >
                    お名前
                    <span className="text-[20px] font-bold text-[#C92D2D] md:text-[30px]">
                      *
                    </span>
                  </label>
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="block h-[50px] w-full rounded-[10px] bg-[#EFF2F6] px-7 md:h-[76px]"
                      placeholder="山田　太郎"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  {error && <div className="text-[#C92D2D]">{error?.issues?.find((issue) => issue.path.includes('name'))?.message}</div>}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-[14px] md:text-[18px]"
                  >
                    メールアドレス
                    <span className="text-[20px] font-bold text-[#C92D2D] md:text-[30px]">
                      *
                    </span>
                  </label>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block h-[50px] w-full rounded-[10px] bg-[#EFF2F6] px-7 md:h-[76px]"
                      placeholder="abc@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  {error && <div className="text-[#C92D2D]">{error?.issues?.find((issue) => issue.path.includes('email'))?.message}</div>}
                  <span className="block px-2 pt-2 text-[12px]">
                    携帯キャリアメールアドレスはメールが届きづらいため、Gmail、Yahoo!メールなどPCメールアドレスを推奨いたします。{' '}
                    <br />
                    ※携帯キャリアメールアドレス：@docomo.ne.jp / @ezweb.ne.jp /
                    @softbank.ne.jp など
                  </span>
                </div>
                <div>
                  <label
                    htmlFor="tel"
                    className="mb-1 block text-[14px] md:text-[18px]"
                  >
                    電話番号
                  </label>
                  <div>
                    <input
                      type="text"
                      id="tel"
                      name="tel"
                      className="block h-[50px] w-full rounded-[10px] bg-[#EFF2F6] px-7 md:h-[76px]"
                      placeholder="090-1234-5678"
                      value={formData.tel}
                      onChange={handleChange}
                    />
                  </div>
                  {error && <div className="text-[#C92D2D]">{error?.issues?.find((issue) => issue.path.includes('tel'))?.message}</div>}
                </div>
                <div>
                  <p className="mb-1 block text-[14px] md:text-[18px]">
                    お申し込みのご希望など{' '}
                    <span className="text-[20px] font-bold text-[#C92D2D] md:text-[30px]">
                      *
                    </span>
                  </p>
                  <div className="mt-3 space-y-3 md:mt-5 md:space-y-6">
                    <label htmlFor="plan1" className="flex items-center gap-3">
                      <p>
                        <span className="relative block size-5 md:size-[30px]">
                          <input
                            id="plan1"
                            name="interests"
                            type="checkbox"
                            checked={formData.interests.includes("＼一番人気／先着50名様で締切メモリアルモニタープランに申し込む")}
                            value="＼一番人気／先着50名様で締切メモリアルモニタープランに申し込む"
                            onChange={handleChange}
                            className="peer z-20 size-5 cursor-pointer opacity-0 md:size-[30px]"
                          />
                          <span className="absolute inset-0 hidden h-full w-full cursor-pointer peer-checked:block">
                            <img src="/assets/images/checkbox.svg" alt="" />
                          </span>
                          <span className="absolute  inset-0 h-full w-full cursor-pointer peer-checked:hidden">
                            <img src="/assets/images/uncheckbox.svg" alt="" />
                          </span>
                        </span>
                      </p>
                      <p className="text-[14px] md:whitespace-nowrap md:text-[20px]">
                        ＼一番人気／先着50名様で締切メモリアルモニタープランに申し込む
                      </p>
                    </label>
                    <label htmlFor="plan2" className="flex items-center gap-3">
                      <p>
                        <span className="relative block size-5 md:size-[30px]">
                          <input
                            id="plan2"
                            name="interests"
                            type="checkbox"
                            checked={formData.interests.includes("エントリープランに申し込む")}
                            value="エントリープランに申し込む"
                            onChange={handleChange}
                            className="peer z-20 size-5 cursor-pointer opacity-0 md:size-[30px]"
                          />
                          <span className="absolute inset-0 hidden h-full w-full cursor-pointer peer-checked:block">
                            <img src="/assets/images/checkbox.svg" alt="" />
                          </span>
                          <span className="absolute  inset-0 h-full w-full cursor-pointer peer-checked:hidden">
                            <img src="/assets/images/uncheckbox.svg" alt="" />
                          </span>
                        </span>
                      </p>
                      <p className="text-[14px] md:whitespace-nowrap md:text-[20px]">
                        エントリープランに申し込む
                      </p>
                    </label>
                    <label htmlFor="plan3" className="flex items-center gap-3">
                      <p>
                        <span className="relative block size-5 md:size-[30px]">
                          <input
                            id="plan3"
                            name="interests"
                            type="checkbox"
                            checked={formData.interests.includes("スタンダードプランに申し込む")}
                            value="スタンダードプランに申し込む"
                            onChange={handleChange}
                            className="peer z-20 size-5 cursor-pointer opacity-0 md:size-[30px]"
                          />
                          <span className="absolute inset-0 hidden h-full w-full cursor-pointer peer-checked:block">
                            <img src="/assets/images/checkbox.svg" alt="" />
                          </span>
                          <span className="absolute  inset-0 h-full w-full cursor-pointer peer-checked:hidden">
                            <img src="/assets/images/uncheckbox.svg" alt="" />
                          </span>
                        </span>
                      </p>
                      <p className="text-[14px] md:whitespace-nowrap md:text-[20px]">
                        スタンダードプランに申し込む
                      </p>
                    </label>
                    <label htmlFor="plan4" className="flex items-center gap-3">
                      <p>
                        <span className="relative block size-5 md:size-[30px]">
                          <input
                            id="plan4"
                            name="interests"
                            type="checkbox"
                            checked={formData.interests.includes("現実の供養所オプション希望")}
                            value="現実の供養所オプション希望"
                            onChange={handleChange}
                            className="peer z-20 size-5 cursor-pointer opacity-0 md:size-[30px]"
                          />
                          <span className="absolute inset-0 hidden h-full w-full cursor-pointer peer-checked:block">
                            <img src="/assets/images/checkbox.svg" alt="" />
                          </span>
                          <span className="absolute  inset-0 h-full w-full cursor-pointer peer-checked:hidden">
                            <img src="/assets/images/uncheckbox.svg" alt="" />
                          </span>
                        </span>
                      </p>
                      <p className="text-[14px] md:whitespace-nowrap md:text-[20px]">
                        現実の供養所オプション希望
                      </p>
                    </label>
                    <label htmlFor="plan5" className="flex items-center gap-3">
                      <p>
                        <span className="relative block size-5 md:size-[30px]">
                          <input
                            id="plan5"
                            name="interests"
                            type="checkbox"
                            checked={formData.interests.includes("その他のご質問・お問い合わせ希望")}
                            value="その他のご質問・お問い合わせ希望"
                            onChange={handleChange}
                            className="peer z-20 size-5 cursor-pointer opacity-0 md:size-[30px]"
                          />
                          <span className="absolute inset-0 hidden h-full w-full cursor-pointer peer-checked:block">
                            <img src="/assets/images/checkbox.svg" alt="" />
                          </span>
                          <span className="absolute  inset-0 h-full w-full cursor-pointer peer-checked:hidden">
                            <img src="/assets/images/uncheckbox.svg" alt="" />
                          </span>
                        </span>
                      </p>
                      <p className="text-[14px] md:whitespace-nowrap md:text-[20px]">
                        その他のご質問・お問い合わせ希望
                      </p>
                    </label>
                  </div>
                  {error && <div className="text-[#C92D2D]">{error?.issues?.find((issue) => issue.path.includes('interests'))?.message}</div>}
                </div>
              </div>
            </div>
            {/* <div className="mt-8 flex justify-center md:mt-14">
              <div className="space-y-5">
                <label htmlFor="terms" className="flex items-center gap-3">
                  <p>
                    <span className="relative block size-5 md:size-[30px]">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        required
                        className="peer z-20 size-5 cursor-pointer opacity-0 md:size-[30px]"
                      />
                      <span className="absolute inset-0 hidden h-full w-full cursor-pointer peer-checked:block">
                        <img src="/assets/images/checkbox.svg" alt="" />
                      </span>
                      <span className="absolute  inset-0 h-full w-full cursor-pointer peer-checked:hidden">
                        <img src="/assets/images/uncheckbox.svg" alt="" />
                      </span>
                    </span>
                  </p>
                  <p className="text-[14px] md:whitespace-nowrap md:text-[20px]">
                    <a href="/terms-of-service" className="underline">
                      利用規約
                    </a>
                    に同意する
                  </p>
                </label>
                <label htmlFor="policy" className="flex items-center gap-3">
                  <p>
                    <span className="relative block size-5 md:size-[30px]">
                      <input
                        id="policy"
                        name="policy"
                        type="checkbox"
                        required
                        className="peer z-20 size-5 cursor-pointer opacity-0 md:size-[30px]"
                      />
                      <span className="absolute inset-0 hidden h-full w-full cursor-pointer peer-checked:block">
                        <img src="/assets/images/checkbox.svg" alt="" />
                      </span>
                      <span className="absolute  inset-0 h-full w-full cursor-pointer peer-checked:hidden">
                        <img src="/assets/images/uncheckbox.svg" alt="" />
                      </span>
                    </span>
                  </p>
                  <p className="text-[14px] md:whitespace-nowrap md:text-[20px]">
                    <a href="/privacy-policy" className="underline">
                      プライバシーポリシー
                    </a>
                    に同意する
                  </p>
                </label>
              </div>
            </div> */}
            <div className="mt-5 flex justify-center md:mt-10">
              <input
                type="button"
                onClick={handleSubmit}
                value="申し込む"
                className="items-cenrer flex h-[54px] w-[300px] cursor-pointer justify-center rounded-[10px] bg-[#F12929] text-[18px] font-bold text-white md:h-[68px] md:text-[24px]"
              />
            </div>
            <div className="max-md:text-[14px] mt-5 flex justify-center md:mt-10">
              <div>
                <p><a href="/terms-of-service" className="underline">利用規約</a>と<a href="/privacy-policy" className="underline">プライバシーポリシー</a>にご同意の上お申し込みください。
                </p>
                  <p className="md:text-[13px] text-[12px] mt-5">※お申し込み前に内容をご確認ください。<br />
              お申し込みはあなた様の意思で行われたものとみなされます。</p>
              </div>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  )
}

export default ModalForm
