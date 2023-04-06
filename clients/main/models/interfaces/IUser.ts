import { ICard } from '@/services/controllers/Bank/models'

export interface IUser {
  firstName: string
  lastName: string
  token: string
  email: string
  address: string
  bankAccount: ICard[]
}
