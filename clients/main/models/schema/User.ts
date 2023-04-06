import { CardSchema } from '@/services/controllers/Bank/models'
import { z } from 'zod'

const bankAccountSchema = z.object({
  bankName: z.string(),
  accountNumber: z.string(),
})

export const UserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  token: z.string(),
  email: z.string().includes('@'),
  address: z.string().optional().nullish(),
  bankAccount: z.array(CardSchema).nullish().default([]),
})
