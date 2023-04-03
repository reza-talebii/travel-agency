import { apiCaller } from '@/services/apiCaller'
import { IdentityUrls } from '@/services/controllers/Identity/urls'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const res = await apiCaller.post(IdentityUrls.login, credentials)

        if (res.status !== 200) {
          return null
        }
        return res.data as any
      },
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
  callbacks: {
    jwt: async ({ token, user }) => {
      return { ...token, ...user }
    },
    session: async ({ session, token }) => {
      session.user = token as any
      return session
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 Days
  },

  pages: {
    signIn: '/login',
  },
}

export default NextAuth(authOptions)
