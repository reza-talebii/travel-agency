import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { ROUTES } from './models'

export default withAuth(
  async function middleware(req) {
    const pathname = req.nextUrl.pathname

    // Manage route protection
    const isAuth = await getToken({ req })
    const isUnauthenticatedRoutes = [ROUTES.login, ROUTES.signUp, ROUTES.addCard]
    const isUnauthenticated = isUnauthenticatedRoutes.some(path => pathname.startsWith(path))

    const sensitiveRoutes = [ROUTES.account, ROUTES.favorites]
    const isAccessingSensitiveRoute = sensitiveRoutes.some(route => pathname.startsWith(route))

    if (isUnauthenticated) {
      if (isAuth) {
        return NextResponse.redirect(new URL(ROUTES.account, req.url))
      }

      return NextResponse.next()
    }

    if (!isAuth && isAccessingSensitiveRoute) {
      return NextResponse.redirect(new URL(ROUTES.login, req.url))
    }
  },
  {
    callbacks: {
      async authorized() {
        return true
      },
    },
  },
)

export const config = {
  matchter: ['/', '/login', '/sign-up', '/add-card', '/account/*', ROUTES.favorites],
}
