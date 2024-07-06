import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(1, '必須項目です。'),
  email: z
    .string()
    .min(1, '必須項目です。')
    .email('無効なメールアドレス形式です。'),
  tel: z
    .string()
    .optional()
    .refine((value) => value === undefined || value === '' || /^0[-\d]{9,12}$/.test(value), {
      message: '無効な電話番号です',
    }),
    interests: z
    .string()
    .refine((value) => value.split(',').filter(Boolean).length > 0, {
      message: '1つ以上選択してください。',
    }),
});
