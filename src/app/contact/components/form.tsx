'use client'

import { ReactNode, useState, useRef, useEffect } from 'react'
import { useFormState, useFormStatus } from 'react-dom'

import ReCAPTCHA from 'react-google-recaptcha'

import { sendMail } from '@/actions/contact'

const initialState = {
  status: 0,
  message: '',
  issues: [],
}

const ContactLabel = ({
  required = false,
  children,
}: {
  required?: boolean
  children: ReactNode
}) => (
  <div className="flex items-center gap-3">
    {required && (
      <p className="flex h-[25px] items-center justify-center rounded-[5px] bg-[#FF517F] px-1.5 text-[13px] font-semibold leading-none text-white">
        必須
      </p>
    )}
    <p className="text-[18px] font-semibold text-black">{children}</p>
  </div>
)

const ContactIcon = ({ error = false }: { error?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${error ? 'fill-[#E63404]' : 'fill-[#999]'}`}
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.63672 9.49999C1.63672 5.43316 4.93353 2.13635 9.00035 2.13635C13.0672 2.13635 16.364 5.43316 16.364 9.49999C16.364 13.5668 13.0672 16.8636 9.00035 16.8636C4.93353 16.8636 1.63672 13.5668 1.63672 9.49999ZM8.21206 8.41126C9.07775 7.97842 10.0525 8.76032 9.81774 9.69929L9.28226 11.8412L9.31359 11.8255C9.5934 11.6856 9.93364 11.799 10.0735 12.0788C10.2134 12.3587 10.1 12.6989 9.82023 12.8388L9.7889 12.8545C8.92321 13.2873 7.94848 12.5054 8.18322 11.5664L8.7187 9.42453L8.68736 9.4402C8.40756 9.5801 8.06731 9.46669 7.92741 9.18688C7.78751 8.90708 7.90092 8.56683 8.18073 8.42693L8.21206 8.41126ZM9.00035 7.23425C9.31319 7.23425 9.56679 6.98065 9.56679 6.66782C9.56679 6.35499 9.31319 6.10139 9.00035 6.10139C8.68752 6.10139 8.43392 6.35499 8.43392 6.66782C8.43392 6.98065 8.68752 7.23425 9.00035 7.23425Z"
    />
  </svg>
)

const SubmitButton = ({
  send,
  hasToken,
}: {
  send: () => void
  hasToken: boolean
}) => {
  const { pending } = useFormStatus()

  return (
    <button
      type="button"
      onClick={send}
      disabled={!hasToken || pending}
      className="flex h-[60px] w-full items-center justify-center gap-2 rounded-lg bg-[linear-gradient(90deg,_rgba(255,125,211,1)_0%,_rgba(60,232,255,1)_100%)] text-[18px] font-bold text-white disabled:opacity-50 md:h-[70px] md:text-[22px]"
    >
      <div
        className={`${
          !pending && 'hidden'
        } h-[.8em] w-[.8em] animate-spin rounded-full border-[3px] border-white border-t-transparent`}
      ></div>
      <span>送　信</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="21"
        viewBox="0 0 25 21"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.9819 0.508069L14.0838 0.384422C14.5254 -0.0887128 15.2202 -0.125108 15.7008 0.275237L15.8162 0.384422L24.3912 9.57192L24.4419 9.62962L24.5095 9.71866L24.5973 9.86467L24.6627 10.0126L24.7061 10.1509L24.7415 10.345L24.75 10.5L24.7466 10.5988L24.7252 10.7635L24.6891 10.9097L24.6353 11.0555L24.5712 11.1834L24.4809 11.3209L24.3912 11.4281L15.8162 20.6156C15.3378 21.1281 14.5622 21.1281 14.0838 20.6156C13.6422 20.1424 13.6082 19.398 13.9819 18.8831L14.0838 18.7594L20.5654 11.8125H1.475C0.798451 11.8125 0.25 11.2249 0.25 10.5C0.25 9.77513 0.798451 9.1875 1.475 9.1875H20.5679L14.0838 2.24058C13.6422 1.76744 13.6082 1.02295 13.9819 0.508069Z"
          fill="white"
        />
      </svg>
    </button>
  )
}

const Form = () => {
  const [state, formAction] = useFormState(sendMail, initialState)
  const [hasToken, setHasToken] = useState<boolean>(false)

  const formRef = useRef<HTMLFormElement>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const handleCaptcha = (value: string | null) => {
    if (value) {
      setHasToken(true)
    }
  }

  const send = async () => {
    const recaptchaValue = recaptchaRef.current?.getValue()
    if (!recaptchaValue) return

    if (formRef.current) {
      formRef.current.requestSubmit()
    }
  }

  useEffect(() => {
    if (state.status === 200) {
      window.scrollTo(0, 0)
    }
  }, [state.status])

  return state.status == 200 ? (
    <div className="mx-auto w-full max-w-[500px] px-5 pb-[160px] md:pb-[277px]">
      <div className="text-[21px] font-bold">
        お問い合わせありがとうございます。
      </div>
      <div className="">送信が完了しました。</div>
    </div>
  ) : (
    <div className="mx-auto w-full max-w-[500px] px-5 pb-[160px] md:pb-[277px]">
      <form
        ref={formRef}
        action={formAction}
        className="space-y-8 md:space-y-[60px]"
      >
        <div className="space-y-2">
          <ContactLabel required>企業名・店舗名</ContactLabel>
          <p>
            <input
              type="text"
              name="company"
              placeholder="株式会社ABC"
              className="h-12 w-full rounded-lg bg-[#F4F1F3] px-6 text-[16px] font-black italic placeholder-[#A9A9A9] md:h-[62px] md:text-[20px]"
            />
          </p>
          <p className="flex items-center text-[14px] font-black italic text-[#999] md:text-[16px]">
            <ContactIcon />
            個人事業主様の場合「なし」でも可
          </p>
          <div className="text-red-600">
            {
              state?.issues?.find((issue) => issue.path.includes('company'))
                ?.message
            }
          </div>
        </div>
        <div className="space-y-2">
          <ContactLabel required>ご担当者名</ContactLabel>
          <p>
            <input
              type="text"
              name="name"
              placeholder="山田　太郎"
              className="h-12 w-full rounded-lg bg-[#F4F1F3] px-6 text-[16px] font-black italic placeholder-[#A9A9A9] md:h-[62px] md:text-[20px]"
            />
          </p>
          <div className="text-red-600">
            {
              state?.issues?.find((issue) => issue.path.includes('name'))
                ?.message
            }
          </div>
        </div>
        <div className="space-y-2">
          <ContactLabel required>ご担当者名 (カナ)</ContactLabel>
          <p>
            <input
              type="text"
              name="kana"
              placeholder="ヤマダ　タロウ"
              className="h-12 w-full rounded-lg bg-[#F4F1F3] px-6 text-[16px] font-black italic placeholder-[#A9A9A9] md:h-[62px] md:text-[20px]"
            />
          </p>
          <div className="text-red-600">
            {
              state?.issues?.find((issue) => issue.path.includes('kana'))
                ?.message
            }
          </div>
        </div>
        <div className="space-y-2">
          <ContactLabel required>メールアドレス</ContactLabel>
          <p>
            <input
              type="text"
              name="email"
              placeholder="yamada@goodfellows17.info"
              className="h-12 w-full rounded-lg bg-[#F4F1F3] px-6 text-[16px] font-black italic placeholder-[#A9A9A9] md:h-[62px] md:text-[20px]"
            />
          </p>
          <div className="text-red-600">
            {
              state?.issues?.find((issue) => issue.path.includes('email'))
                ?.message
            }
          </div>
        </div>
        <div className="space-y-2">
          <ContactLabel required>電話番号</ContactLabel>
          <p>
            <input
              type="text"
              name="tel"
              placeholder="03-1234-5678"
              className="h-12 w-full rounded-lg bg-[#F4F1F3] px-6 text-[16px] font-black italic placeholder-[#A9A9A9] md:h-[62px] md:text-[20px]"
            />
          </p>
          <div className="text-red-600">
            {
              state?.issues?.find((issue) => issue.path.includes('tel'))
                ?.message
            }
          </div>
        </div>
        <div className="space-y-2">
          <ContactLabel>貴社ホームページURL</ContactLabel>
          <p>
            <input
              type="text"
              name="hp"
              placeholder="goodfellows17.info"
              className="h-12 w-full rounded-lg bg-[#F4F1F3] px-6 text-[16px] font-black italic placeholder-[#A9A9A9] md:h-[62px] md:text-[20px]"
            />
          </p>
          <div className="text-red-600">
            {state?.issues?.find((issue) => issue.path.includes('hp'))?.message}
          </div>
        </div>
        <div className="space-y-2">
          <ContactLabel>件名</ContactLabel>
          <p>
            <input
              type="text"
              name="subject"
              placeholder="ライバーについて"
              className="h-12 w-full rounded-lg bg-[#F4F1F3] px-6 text-[16px] font-black italic placeholder-[#A9A9A9] md:h-[62px] md:text-[20px]"
            />
          </p>
          <div className="text-red-600">
            {
              state?.issues?.find((issue) => issue.path.includes('subject'))
                ?.message
            }
          </div>
        </div>
        <div className="space-y-2">
          <ContactLabel required>お問い合わせ内容</ContactLabel>
          <p>
            <textarea
              name="body"
              placeholder="200文字以内でご入力ください。"
              className="h-[240px] w-full rounded-lg bg-[#F4F1F3] p-6 text-[16px] font-black italic placeholder-[#A9A9A9] md:h-[338px] md:text-[20px]"
            ></textarea>
          </p>
          <div className="text-red-600">
            {
              state?.issues?.find((issue) => issue.path.includes('body'))
                ?.message
            }
          </div>
        </div>
        <div>
          <p className="mb-6 text-center">
            ご送信前に弊社
            <a
              href="/privacy-policy"
              className="font-bold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              個人情報保護方針
            </a>
            をご確認ください。
          </p>
          <div className="mb-6 flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
              onChange={handleCaptcha}
            />
          </div>
          <SubmitButton send={send} hasToken={hasToken} />
        </div>
      </form>
    </div>
  )
}

export default Form
