import { db} from "@/lib/db";

export const getAllAnimalFromDb = async () => {
    const animal = await db.animal.findMany()
    return animal
}

export const getAnimalFromDb = async (id: number) => {
    const animal = await db.animal.findFirst({
        where: {
            id: id
        }
    })
    return animal || null
}

export const createAnimalInDb = async (prenom: string, race: string) => {
    const animal = await db.animal.create({
        data: {
            prenom: prenom,
            race:race,
        }
    })
    return animal
}

export const updateAnimalInDb = async (id: number, prenom: string, race: string) => {
    const animal = await db.animal.update({
        where: {
            id: id
        },
        data: {
            prenom: prenom,
            race: race,
        }
    })
    return animal
}

export const deleteAnimalInDb = async (id: number) => {
    const animal = await db.animal.delete({
        where: {
            id: id
        }
    })
    return animal
}

    