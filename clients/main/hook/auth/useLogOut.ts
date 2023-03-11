import { USER_JWT_TOKEN } from 'constants/localStorage'
import { ROUTES } from 'models/enums'
import { useRouter } from 'next/router'
import useAuthStore from 'store/auth'

export const useLogout = () => {
  const router = useRouter()
  const { logout } = useAuthStore()

  const logoutHandler = async () => {
    logout()
    localStorage.removeItem(USER_JWT_TOKEN)
    if (router.pathname.includes(ROUTES.userPanel)) router.push('/' + ROUTES.login)
  }

  return { logoutHandler }
}
