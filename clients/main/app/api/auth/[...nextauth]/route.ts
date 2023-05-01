import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },

  pages: {
    signIn: '/login',
  },

  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'email' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials, req) {
        const res = await fetch('http://localhost:8080/Identity/login', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const data = await res.json()

        return data as any
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      return { ...token, ...user }
    },
    session: async ({ session, token }) => {
      session.user = token as any
      return session
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
