import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

export const useGetServerSession = async () => {
  const data = await getServerSession(authOptions)
  return data
}
