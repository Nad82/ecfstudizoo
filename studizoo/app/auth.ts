import NextAuth, { DefaultSession } from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter"
import { db } from "../lib/db"
import Credentials from "next-auth/providers/credentials"
import { signInSchema } from "@/lib/zod"
import { ZodError } from "zod"
import saltAndHashPassword from "@/lib/saltAndHashPassword"
import type { Provider } from "next-auth/providers"
import bcrypt from "bcryptjs"

declare module "next-auth" {

    interface Session {
        user: {
            id: number
            email: string
            password: string
            role: string
            created_at: Date
            updated_at: Date
            email_verified: Date
        } & DefaultSession["user"]
    }
}

const providers: Provider[] = [
    Credentials({
        credentials: {
            email: { label: "Email", type: "email" },
            password: {  label: "Password", type: "password" }
        },
        authorize: 
            async (credentials) => {
                try {
                    const email = credentials?.email as string
                    const pwHash = await saltAndHashPassword(credentials?.password as string)

                    const user = await signInSchema.parseAsync(credentials)
                        await db.user.findUnique({
                            where: {
                                email: email
                            }
                        })
                    if (user && await bcrypt.compare(user.password, pwHash)) {
                        return user
                    }
                    return null
                } catch (error) {
                    if (error instanceof ZodError) {
                        return null
                    }
                    console.log(`Error at authorize: ${error}`)
                    return null
                }

            },
    }),
]

export const providerMap = providers
    .map((provider) => {
        if (typeof provider === "function") {
            const providerData = provider()
        return { id: providerData.id, name: providerData.name }
        } else {
        return { id: provider.id, name: provider.name }
    }
})
    .filter((provider) => provider.id !== "credentials")

export const {handlers, signIn, signOut, auth } = NextAuth({
    providers,
    adapter: PrismaAdapter(db),
    pages: {
        signIn: "/connexion",
        signOut: "/deconnexion",
        error: "/error"
    },
    session :{
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    callbacks: {
        session({session, token, user}) {
            
            return {
                ...session,
                user: {
                    ...session.user,
                    id: user.id,
                    email: user.email
                }
            }
        },
    },
    debug:true,
    
})
