import { db } from "@/lib/db";

export const getAllConsommationAnimalFromDb = async () => {
    const consommation_animal = await db.consommation_animal.findMany();
    return consommation_animal
}

export const getConsommationAnimalFromDb = async (id: number) => {
    const consommation_animal = await db.consommation_animal.findFirst({
        where: {
            id: id
        }
    })
    return consommation_animal || null
}

export const createConsommationAnimalInDb = async (nourriture: string, quantite: number, heure: Date) => {
    const consommation_animal = await db.consommation_animal.create({
        data: {
            nourriture: nourriture,
            quantite: quantite,
            heure: heure
        }
    })
    return consommation_animal
}

export const updateConsommationAnimalInDb = async (id: number, nourriture: string, quantite: number, heure: Date) => {
    const consommation_animal = await db.consommation_animal.update({
        where: {
            id: id
        },
        data: {
            nourriture: nourriture,
            quantite: quantite,
            heure: heure
        }
    })
    return consommation_animal
}

export const deleteConsommationAnimalInDb = async (id: number) => {
    const consommation_animal = await db.consommation_animal.delete({
        where: {
            id: id
        }
    })
    return consommation_animal
}