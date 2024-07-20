import { object, string } from "zod"

export const signInSchema = object({
    email: string({ required_error: "L'Email est requis" })
        .min(1, "L'Email est requis")
        .email("L'Email n'est pas valide"),
    password: string({ required_error: "Le mot de passe est requis" })
        .min(1, "Le mot de passe est requis")
        .min(8, "Le mot de passe doit contenir au moins 8 caractères")
        .max(32, "Le mot de passe doit contenir au maximum 32 caractères"),
})