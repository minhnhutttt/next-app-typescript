'use server'

import { z } from 'zod'

const contactSchema = z.object({
  company: z.string().min(1, '必須項目です。'),
  name: z.string().min(1, '必須項目です。'),
  kana: z.string().min(1, '必須項目です。'),
  email: z
    .string()
    .min(1, '必須項目です。')
    .email('無効なメールアドレス形式です。'),
  tel: z
    .string()
    .min(1, '必須項目です。')
    .regex(/^0[-\d]{9,12}$/, '無効な電話番号です'),
  hp: z.string(),
  subject: z.string(),
  body: z.string().min(1, '必須項目です。'),
  'g-recaptcha-response': z.string().min(1, '必須項目です。'),
})

export const sendMail = async (
  prevState: {
    status: number
    message?: string
    issues?: z.ZodIssue[]
  },
  formData: FormData
) => {
  const parse = contactSchema.safeParse({
    company: formData.get('company'),
    name: formData.get('name'),
    kana: formData.get('kana'),
    email: formData.get('email'),
    tel: formData.get('tel'),
    hp: formData.get('hp'),
    subject: formData.get('subject'),
    body: formData.get('body'),
    'g-recaptcha-response': formData.get('g-recaptcha-response'),
  })

  if (!parse.success) {
    return {
      status: 400,
      message: '送信に失敗しました',
      issues: parse.error.issues,
    }
  }

  const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY
  const token = parse.data['g-recaptcha-response']
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}`

  try {
    const response = await fetch(verifyUrl, {
      method: 'POST',
    })

    const data = await response.json()

    if (!data.success) {
      return {
        status: 400,
        message: `Invalid reCAPTCHA token`,
      }
    }

    const awsEndpoint = process.env.AWS_END_POINT
    const apiKey = process.env.AWS_API_KEY as string

    if (!awsEndpoint) {
      throw new Error('AWS_END_POINT is not defined.')
    }

    const awsResponse = await fetch(awsEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify({
        company: parse.data.company,
        name: parse.data.name,
        kana: parse.data.kana,
        email: parse.data.email,
        tel: parse.data.tel,
        hp: parse.data.hp,
        subject: parse.data.subject,
        body: parse.data.body,
      }),
    })

    if (!awsResponse.ok) {
      return {
        status: 400,
        message: `Failed to send mail`,
      }
    }

    return {
      status: 200,
    }
  } catch (e) {
    return {
      status: 500,
      message: `送信に失敗しました`,
    }
  }
}
