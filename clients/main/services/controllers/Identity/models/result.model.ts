import { IUser } from '@/models'

export interface IResponseAuth extends IUser {
  token: string
}
