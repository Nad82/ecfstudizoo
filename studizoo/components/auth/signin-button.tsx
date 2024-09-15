
"use client"
import { signIn } from "next-auth/react"
import { Button } from "../ui/button"
import { User } from "lucide-react"

export function SignIn() {
    
    return <Button onClick={() => signIn()}><User/>Connexion employé</Button>
}