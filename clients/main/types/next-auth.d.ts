import { IUser } from '@/models'
import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: IUser
  }
}
