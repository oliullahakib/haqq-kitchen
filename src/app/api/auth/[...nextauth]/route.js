import { dbConnect } from "@/lib/dbConnet"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Email',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const { email, password } = credentials
        const user = (await dbConnect('users')).findOne({ email })
        if (!user) {
          return null
        }
        const isPassOk = bcrypt.compare(password, user.password)
        if (isPassOk) {
          return user
        }
        return null
      },
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async session({ session, user, token }) {
      session.role = token.role
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if(user){
        token.role = user.role
      }
      return token
    }

  }

}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }