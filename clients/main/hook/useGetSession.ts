'use client'
import { useSession } from 'next-auth/react'
export const useGetSession = () => {
  const { data: session, status } = useSession()
  const isLoading = status === 'loading'
  const isAuthenticated = !!session?.user

  return {
    user: session?.user,
    isLoading,
    isAuthenticated,
  }
}
