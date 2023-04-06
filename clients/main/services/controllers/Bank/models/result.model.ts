import { z } from 'zod'

export interface ICard {
  cardNumber: number
  iban: string
  status: number
  userId: string
  id: string
}

export const CardSchema = z.object({
  cardNumber: z.number(),
  iban: z.string(),
  status: z.number(),
  userId: z.string(),
  id: z.string(),
})

export type Card = z.infer<typeof CardSchema>
