import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    if (req.nextUrl.pathname === '/account' && !req.nextauth.token) {
      return NextResponse.rewrite(new URL('/login', req.url))
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
)

export const config = { matcher: ['/account'] }
