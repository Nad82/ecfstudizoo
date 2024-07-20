import NextAuth from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter"
import Resend from "next-auth/providers/resend"
import { db } from "../lib/db"


export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(db),
    providers: [
        Resend({
            apiKey: process.env.RESEND_API_KEY,
            from: 'onboarding@resend.dev'
        }),
    ],
})
