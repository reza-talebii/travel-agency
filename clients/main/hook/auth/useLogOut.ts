import { USER_JWT_TOKEN } from '@/constants'
import { ROUTES } from '@/models'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import useAuthStore from 'store/auth'

export const useLogout = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { logout } = useAuthStore()

  const logoutHandler = async () => {
    logout()
    localStorage.removeItem(USER_JWT_TOKEN)
    if (pathname.includes(ROUTES.account)) router.push(ROUTES.login)
  }

  return { logoutHandler }
}
