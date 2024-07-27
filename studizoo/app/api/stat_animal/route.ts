import { PrismaClient } from "@internal/prisma-second/client";

const prisma = new PrismaClient();

export const getAllStatAnimalFromDb = async () => {
    const statAnimal = await prisma.stat_animal.findMany();
    return statAnimal
}

export const getStatAnimalFromDb = async (id: string) => {
    const statAnimal = await prisma.stat_animal.findFirst({
        where: {
            id: id
        }
    })
    return statAnimal || null
}

export const createStatAnimalInDb = async (clic: number, date_created: Date, prenom: string) => {
    const statAnimal = await prisma.stat_animal.create({
        data: {
            clic:clic,
            date_created:date_created,
            prenom:prenom
        }
    })
    return statAnimal
}

export const updateStatAnimalInDb = async (id: string, clic: number, date_created: Date, prenom: string) => {
    const statAnimal = await prisma.stat_animal.update({
        where: {
            id: id
        },
        data: {
            clic:clic,
            date_created:date_created,
            prenom:prenom
        }
    })
    return statAnimal
}

export const deleteStatAnimalInDb = async (id: string) => {
    const statAnimal = await prisma.stat_animal.delete({
        where: {
            id: id
        }
    })
    return statAnimal
}
