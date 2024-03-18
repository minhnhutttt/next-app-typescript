import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(1, '必須項目です。'),
  email: z
    .string()
    .min(1, '必須項目です。')
    .email('無効なメールアドレス形式です。'),
  tel: z
    .string()
    .min(1, '必須項目です。')
    .regex(/^0[-\d]{9,12}$/, '無効な電話番号です'),
  contact: z.array(z.string()).min(1, '1つ以上選択してください。'),
  'g-recaptcha-response': z.string().min(1, '必須項目です。'),
})
