declare module "next-auth"{
    interface User {}

    interface Account{}

    interface Session{}
}

import { JWT } from "next-auth/jwt"

declare module "next-auth/jwt"{
    interface JWT{
        idToken?: string
    }
}