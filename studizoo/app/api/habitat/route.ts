import { db } from "@/lib/db";

export const getAllHabitatFromDb = async () => {
    const habitat = await db.habitat.findMany();
    return habitat
}

export const getHabitatFromDb = async (id: number) => {
    const habitat = await db.habitat.findFirst({
        where: {
            id: id
        }
    })
    return habitat || null
}

export const createHabitatInDb = async (nom: string, description: string) => {
    const habitat = await db.habitat.create({
        data: {
            nom: nom,
            description: description
        }
    })
    return habitat
}

export const updateHabitatInDb = async (id: number, nom: string, description: string) => {
    const habitat = await db.habitat.update({
        where: {
            id: id
        },
        data: {
            nom: nom,
            description: description
        }
    })
    return habitat
}

export const deleteHabitatInDb = async (id: number) => {
    const habitat = await db.habitat.delete({
        where: {
            id: id
        }
    })
    return habitat
}