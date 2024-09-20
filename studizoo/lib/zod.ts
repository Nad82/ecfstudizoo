import { boolean, date, number, object, string, z } from "zod"

export const signInSchema = object({
    email: string({ required_error: "L'Email est requis" })
        .min(1, "L'Email est requis")
        .email("L'Email n'est pas valide"),
    password: string({ required_error: "Le mot de passe est requis" })
        .min(1, "Le mot de passe est requis")
        .min(8, "Le mot de passe doit contenir au moins 8 caractères")
        .max(32, "Le mot de passe doit contenir au maximum 32 caractères")
})

export const userSchema = object({
    email: string({ required_error: "L'Email est requis" })
        .min(1, "L'Email est requis")
        .email("L'Email n'est pas valide"),
    password: string({ required_error: "Le mot de passe est requis" })
        .min(1, "Le mot de passe est requis")
        .min(8, "Le mot de passe doit contenir au moins 8 caractères")
        .max(20, "Le mot de passe doit contenir au maximum 32 caractères")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule et un chiffre"),
    email_verified: date({ required_error: "L'email_verified est requis" }),
    created_at: date({ required_error: "Le created_at est requis" }),
    updated_at: date({ required_error: "Le updated_at est requis" }),
    role_id: number({ required_error: "Le role_id est requis" }),
})

export const animalSchema = object({
    prenom: string({ required_error: "Le prénom est requis" })
        .min(1, "Le prénom est requis")
        .max(32, "Le prénom doit contenir au maximum 32 caractères"),
    race : string({ required_error: "La race est requise"})
        .min(1, "La race est requise")
        .max(32,"La race doit contenir au maximum 32 caractères"),
    habitatId: number ({ required_error: "L'habitatId est requis" })
})

export const avisSchema = object({
    pseudo: string({ required_error: "Le pseudo est requis" })
        .min(1, "Le pseudo est requis")
        .max(32, "Le pseudo doit contenir au maximum 32 caractères"),
    commentaires: string({ required_error: "Le commentaire est requis" })
        .min(1, "Le commentaire est requis")
        .max(255, "Le commentaire doit contenir au maximum 255 caractères"),
    published: boolean({ required_error: "La publication est requise" })
})

export const compte_renduSchema = object ({
    etat : string({ required_error: "L'état est requis" })
        .min(1, "L'état est requis")
        .max(255, "L'état doit contenir au maximum 255 caractères"),
    nourriture : string ({ required_error: "La nourriture est requise"})
        .min(1, "La nourriture est requise")
        .max(255, "La nourriture doit contenir au maximum 255 caractères"),
    quantite_nourriture : number({ required_error: "La quantité de nourriture est requise"})
        .min(1, "La quantité de nourriture est requise"),
    heure_passage: date({ required_error: "L'heure de passage est requise"}),
    animalId : number({ required_error: "L'animalId est requis"})
})

export const horairesSchema = object({
    description: string({ required_error: "La description est requise" })
        .min(1, "La description est requise")
        .max(255, "La description doit contenir au maximum 255 caractères")
})

export const roleSchema = object({
    nom: string({ required_error: "La description est requise" })
        .min(1, "La description est requise")
        .max(255, "La description doit contenir au maximum 255 caractères")
})

export const consommation_animalSchema = object({
    nourriture: string({ required_error: "La nourriture est requise" })
        .min(1, "La nourriture est requise")
        .max(255, "La nourriture doit contenir au maximum 255 caractères"),
    quantite: number({ required_error: "La quantité est requise" }),
    heure : date({ required_error: "L'heure est requise" }),
    animalId: number({ required_error: "L'animalId est requis" })
})

export const etat_habitatSchema = object({
    commentaires: string({ required_error: "Les commentaires sont requis" })
        .min(1, "Les commentaires sont requis")
        .max(255, "Les commentaires doivent contenir au maximum 255 caractères"),
    amelioration: boolean({ required_error: "L'amélioration est requise" }),
    habitatId: number({ required_error: "L'habitatId est requis" })
})

export const habitatSchema = object ({
    nom: string({ required_error: "Le nom est requis" })
        .min(1, "Le nom est requis")
        .max(255, "Le nom doit contenir au maximum 255 caractères"),
    description: string({ required_error: "La description est requise" })
        .min(1, "La description est requise")
        .max(255, "La description doit contenir au maximum 255 caractères")
})

export const servicesSchema = object ({
    nom: string({ required_error: "Le nom est requis" })
        .min(1, "Le nom est requis")
        .max(255, "Le nom doit contenir au maximum 255 caractères"),
    description: string({ required_error: "La description est requise" })
        .min(1, "La description est requise")
        .max(255, "La description doit contenir au maximum 255 caractères")
})

export const image_animalSchema = z.object ({
    nom: z.string({ required_error: "Le nom est requis" })
        .min(1, "Le nom est requis")
        .max(255, "Le nom doit contenir au maximum 255 caractères"),
    animalId: z.number({ required_error: "L'animalId est requis" }),
})

export const image_habitatSchema = z.object ({
    nom: z.string({ required_error: "Le nom est requis" })
        .min(1, "Le nom est requis")
        .max(255, "Le nom doit contenir au maximum 255 caractères"),
    habitatId: z.number({ required_error: "L'habitatId est requis" }),
})

export const stat_animalSchema = object ({
    clic: number({ required_error: "Le clic est requis" }),
    date_created: date({ required_error: "La date de création est requise" }),
    prenom: string({ required_error: "Le prénom est requis" })
        .min(1, "Le prénom est requis")
        .max(255, "Le prénom doit contenir au maximum 255 caractères")
})

