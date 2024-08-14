
import { stat_animalSchema } from "@/lib/zod";
import { PrismaClient } from "@internal/prisma-second/client";
import { z } from "zod";

const prisma = new PrismaClient();

export const getAllStatAnimalFromDb = async () => {
    try {
        const statAnimal = await prisma.stat_animal.findMany();
        return statAnimal
    }
    catch (error) {
        console.log(`Error at getAllStatAnimalFromDb: ${error}`)
        return null
    }
}

export const getStatAnimalFromDb = async (id: string) => {
    try {
        const statAnimal = await prisma.stat_animal.findFirst({
            where: {
                id: id
            }
        })
        return statAnimal
    }
    catch (error) {
        console.log(`Error at getStatAnimalFromDb: ${error}`)
        return null
    }
}

export const createStatAnimalInDb = async (statAnimal:z.infer<typeof stat_animalSchema>) => {
    try {
        await prisma.stat_animal.create({
            data: statAnimal
        })

    }
    catch (error) {
        console.log(`Error at createStatAnimalInDb: ${error}`)
        return {error: "Une erreur est survenue lors de la création du statAnimal" }
    }
}

export const updateStatAnimalInDb = async (id: string, statAnimal:z.infer<typeof stat_animalSchema>) => {
    try {
        await prisma.stat_animal.update({
            where: {
                id: id
            },
            data: statAnimal
        })
    }
    catch (error) {
        console.log(`Error at updateStatAnimalInDb: ${error}`)
        return {error: "Une erreur est survenue lors de la modification du statAnimal" }
    }
    
}

export const deleteStatAnimalInDb = async (id: string) => {
    try {
        await prisma.stat_animal.delete({
            where: {
                id: id
            }
        })
    }
    catch (error) {
        console.log(`Error at deleteStatAnimalInDb: ${error}`)
        return {error: "Une erreur est survenue lors de la suppression du statAnimal" }
    }
}
