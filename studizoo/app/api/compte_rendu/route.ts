import { db } from "@/lib/db";

export const getAllCompteRenduFromDb = async () => {
    const compte_rendu = await db.compte_rendu.findMany();
    return compte_rendu
}

export const getCompteRenduFromDb = async (id: number) => {
    const compte_rendu = await db.compte_rendu.findFirst({
        where: {
            id: id
        }
    })
    return compte_rendu || null
}

export const createCompteRenduInDb = async (etat: string, nourriture: string, quantite_nourriture: number, heure_passage: Date ) => {
    const compte_rendu = await db.compte_rendu.create({
        data: {
            etat: etat,
            nourriture: nourriture,
            quantite_nourriture: quantite_nourriture,
            heure_passage: heure_passage
        }
    })
    return compte_rendu
}

export const updateCompteRenduInDb = async (id: number, etat: string, nourriture: string, quantite_nourriture: number, heure_passage: Date) => {
    const compte_rendu = await db.compte_rendu.update({
        where: {
            id: id
        },
        data: {
            etat: etat,
            nourriture: nourriture,
            quantite_nourriture: quantite_nourriture,
            heure_passage: heure_passage
        }
    })
    return compte_rendu
}

export const deleteCompteRenduInDb = async (id: number) => {
    const compte_rendu = await db.compte_rendu.delete({
        where: {
            id: id
        }
    })
    return compte_rendu
}

