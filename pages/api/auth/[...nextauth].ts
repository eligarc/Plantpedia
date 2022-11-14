import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import Providers from "next-auth/providers";

const options: NextAuthOptions = {
  theme: "light",
  debug: true,
  session: {
    jwt: true,
    maxAge: 60 * 15, // 15 minutes,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
		encryption: true,
    encryptionKey: process.env.JWT_ENCRYPTION_KEY,
  },
  providers: [
    Providers.Credentials({
      name: "Plantpedia",
      credentials: {
        password: {
          type: "password",
          label: "Ingresa tu contraseña",
        },
      },
      async authorize(credentials) {
        // API call to validate credentials
        // JSON response with user object
        // If no user, return null
        console.log("credentials", credentials);
        const resp = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/plantpedia`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {
            "Content-Type": "application/json",
          },
        })
        const user = await resp.json()
        if (resp.ok && user) {
          return user
        }
        return null
      },
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
}

export default NextAuth(options);