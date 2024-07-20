import React from 'react'
import { signIn } from '../auth'

export default function Connexion() {
    return (
        <form
            action={async (formData) => {
            "use server"
            await signIn("credentials", formData)
        }}
        >
            <label>
                Email
                <input name="email" type="email" />
            </label>
            <label>
                Password
                <input name="password" type="password"/>
            </label>
            <button>Connexion</button>
        </form>
    )
}
