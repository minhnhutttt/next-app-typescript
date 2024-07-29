'use client'

import { useState, useRef, useEffect } from 'react'
import { useFormState, useFormStatus } from 'react-dom'

import { useRouter } from 'next/navigation'
import ReCAPTCHA from 'react-google-recaptcha'

import { sendMail } from '@/actions/contact'

const initialState = {
  status: 0,
  message: '',
  issues: [],
}

interface RadioProps {
  label: string
  name: string
}

const Radio = ({ label, name }: RadioProps) => {
  return (
    <label className="flex gap-3">
      <input
        type="radio"
        name={name}
        className="size-4 md:size-6"
        value={label}
      />
      <span>{label}</span>
    </label>
  )
}

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
      className="mx-auto flex h-[51px] w-[240px] items-center justify-center rounded-[30px] bg-[linear-gradient(180deg,_#F35646_0%,_#F58214_100%)] text-[14px] font-bold text-white disabled:opacity-50 md:text-[18px]"
    >
      <div
        className={`${
          !pending && 'hidden'
        } h-[.8em] w-[.8em] animate-spin rounded-full border-[3px] border-white border-t-transparent`}
      ></div>
      <span>送信</span>
    </button>
  )
}

const Form = () => {
  const router = useRouter()

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
      router.push(`/#contact`)
    }
  }, [state.status])

  return state.status == 200 ? (
    <div className="flex items-center justify-center py-12">
      送信が完了しました。
    </div>
  ) : (
    <form ref={formRef} action={formAction}>
      <div className="mt-8 space-y-6 md:mt-10 md:space-y-8">
        <div>
          <label
            htmlFor="company"
            className="text-[14px] font-medium md:text-[18px]"
          >
            貴社名
            <span className="relative -top-1 inline-block font-bold text-[#FA3131]">
              ※
            </span>
          </label>
          <input
            type="text"
            name="company"
            className="mt-2 h-[40px] w-full border border-[#AEAEAE] p-3 md:h-[50px]"
          />
          <div className="text-[#FA3131]">
            {
              state?.issues?.find((issue) => issue.path.includes('company'))
                ?.message
            }
          </div>
        </div>
        <div>
          <label
            htmlFor="name"
            className="text-[14px] font-medium md:text-[18px]"
          >
            ご担当者氏名
            <span className="relative -top-1 inline-block font-bold text-[#FA3131]">
              ※
            </span>
          </label>
          <input
            type="text"
            name="name"
            className="mt-2 h-[40px] w-full border border-[#AEAEAE] p-3 md:h-[50px]"
          />
          <div className="text-[#FA3131]">
            {
              state?.issues?.find((issue) => issue.path.includes('name'))
                ?.message
            }
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-[14px] font-medium md:text-[18px]"
          >
            ご連絡用メールアドレス
            <span className="relative -top-1 inline-block font-bold text-[#FA3131]">
              ※
            </span>
          </label>
          <input
            type="text"
            name="email"
            className="mt-2 h-[40px] w-full border border-[#AEAEAE] p-3 md:h-[50px]"
          />
          <div className="text-[#FA3131]">
            {
              state?.issues?.find((issue) => issue.path.includes('email'))
                ?.message
            }
          </div>
        </div>
        <div>
          <label
            htmlFor="tel"
            className="text-[14px] font-medium md:text-[18px]"
          >
            お電話番号
          </label>
          <input
            type="text"
            name="tel"
            className="mt-2 h-[40px] w-full border border-[#AEAEAE] p-3 md:h-[50px]"
          />
          <div className="text-[#FA3131]">
            {
              state?.issues?.find((issue) => issue.path.includes('tel'))
                ?.message
            }
          </div>
        </div>
        <div>
          <div className="text-[14px] font-medium md:text-[18px]">
            お問い合わせ項目
            <span className="relative -top-1 inline-block font-bold text-[#FA3131]">
              ※
            </span>
          </div>
          <div className="mt-4 flex flex-col gap-2 text-[14px] md:text-[16px]">
            <Radio label="AI eラーニングに申し込みたい" name="type" />
            <Radio label="オンラインでのご相談を希望" name="type" />
            <Radio label="対面でのご相談を希望" name="type" />
            <Radio label="資料のご請求" name="type" />
            <Radio label="セミナー予定に関するお問い合わせ" name="type" />
            <Radio label="その他ご相談・お問い合わせ" name="type" />
          </div>
          <div className="text-[#FA3131]">
            {
              state?.issues?.find((issue) => issue.path.includes('type'))
                ?.message
            }
          </div>
        </div>
        <div>
          <label
            htmlFor="body"
            className="text-[14px] font-medium md:text-[18px]"
          >
            ご希望の日時やご相談・お問い合わせの概要
          </label>
          <textarea
            name="body"
            id="body"
            rows={4}
            className="mt-2 h-[150px] w-full border border-[#AEAEAE] p-3 md:h-[240px]"
          ></textarea>
          <div className="text-[#FA3131]">
            {
              state?.issues?.find((issue) => issue.path.includes('body'))
                ?.message
            }
          </div>
        </div>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
          onChange={handleCaptcha}
        />
        <SubmitButton send={send} hasToken={hasToken} />
      </div>
    </form>
  )
}

export default Form
