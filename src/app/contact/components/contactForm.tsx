'use client'

import { useState, useRef, useEffect } from 'react'

import { useFormState, useFormStatus } from 'react-dom'

import useScrollAnimations from '@/hooks/useScrollAnimations'
import FormInput from './formInput'
import FormTextArea from './formTextArea'
import FormCheckbox from './formCheckbox'

const Needs = [
  'BLOCKCHAIN DEVELOPMENT',
  'WEBSITE DEVELOPMENT',
  'APPLICATION DEVELOPMENT',
  'AI DEVELOPMENT',
  'CONSULTATION',
  'OTHER INQUIRIES',
]

const initialState = {
  status: 0,
  message: '',
  issues: [],
}

const SubmitButton = ({
  validation,
  isVerified,
}: {
  validation: () => void
  isVerified: boolean
}) => {
  const { pending } = useFormStatus()

  return (
    <button
      type="button"
      onClick={validation}
      aria-disabled={pending}
      disabled={!isVerified || pending}
      className="bg-primary-dark mx-auto flex w-full max-w-[300px] items-center justify-center gap-1.5 rounded-[10px] p-[18px] text-2xl font-bold tracking-[0.3em] disabled:bg-[#F5F5F5] disabled:text-[#999899]"
    >
      <div
        className={`${
          !pending && 'hidden'
        } border-primary-dark h-[.8em] w-[.8em] animate-spin rounded-full border-[3px] border-t-transparent`}
      ></div>
      <span>送信</span>
    </button>
  )
}

const ContactForm = () => {
  const ref = useScrollAnimations()
  //const [state, formAction] = useFormState(sendMail, initialState)
  const [isVerified, setIsVerified] = useState<boolean>(false)

  const formRef = useRef<HTMLFormElement>(null)
  //const recaptchaRef = useRef<ReCAPTCHA>(null)

  const validation = async () => {
    //const recaptchaValue = recaptchaRef.current?.getValue()
    //if (!recaptchaValue) return

    if (formRef.current) {
      const formData = new FormData(formRef.current)
      console.log(formData?.get('name'))
      console.log(formData?.getAll('needs'))
      //formRef.current.requestSubmit()
    }
  }

  return (
    <>
      <div className="px-5" ref={ref}>
        <div className="mx-auto w-full max-w-[1000px]">
          <form ref={formRef}>
            <p className="fade-down text-center text-[20px] md:text-[42px]">
              WHAT DO YOU NEED US TO DO?
            </p>
            <span className="fade-down mt-4 block h-px bg-[linear-gradient(90deg,_rgba(255,132,200,1)_0%,_rgba(181,228,255,1)_49%,_rgba(14,255,255,1)_100%)]"></span>
            <FormCheckbox name="needs" options={Needs} />
            <p className="fade-down text-center text-[20px] md:text-[42px]">
              REQUESTER AND PROJECT DETAILS
            </p>
            <span className="fade-down mt-4 block h-px bg-[linear-gradient(90deg,_rgba(255,132,200,1)_0%,_rgba(181,228,255,1)_49%,_rgba(14,255,255,1)_100%)]"></span>
            <div className="mx-auto mb-6 mt-10 w-full max-w-[722px] space-y-9 md:space-y-[60px]">
              <div className="grid gap-9 md:grid-cols-2 md:gap-10">
                <FormInput
                  label="Full Name"
                  name="name"
                  placeholder="Please enter your name."
                />
                <FormInput
                  label="Email Address"
                  name="email"
                  placeholder="Provide an email address for reply correspondence."
                />
              </div>
              <FormInput
                label="Company Name (optional)"
                name="company"
                placeholder="Enter the name of your company or organization."
              />
              <FormTextArea
                label="PROJECT DETAILS (optional)"
                name="project"
                placeholder="Describe the details, requirements, objectives, and expected deliverables of your project."
              />
              <FormTextArea
                label="ADDITIONAL COMMENTS OR QUESTIONS"
                name="additional"
                placeholder="If you have any additional notes or questions, please include them here."
              />
            </div>
            <div className="text-right">
              <button
                type="button"
                onClick={validation}
                className="mr-auto inline-block text-[10vw] duration-300 hover:scale-110 sm:text-[42px]"
              >
                SUBMIT→
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactForm
