import { ROUTES } from '@/models/enum/ROUTES'
import { signOut } from 'next-auth/react'

export const signOutHandler = () => signOut({ callbackUrl: ROUTES.login })
