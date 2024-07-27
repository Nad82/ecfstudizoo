import { db} from "@/lib/db";

export const getAllAnimalsFromDb = async () => {
    const animals = await db.animal.findMany();

}

export const getAnimalFromDb = async (id: number) => {
    const animal = await db.animal.findFirst({
        where: {
            id: id
        }
    })
    return animal || null
}

export const createAnimalInDb = async (prenom: string, race: string, habitat: string) => {
    const animal = await db.animal.create({
        data: {
            prenom: prenom,
            race:race,
            habitat: habitat
        }
    })
    return animal
}

export const updateAnimalInDb = async (id: number, prenom: string, race: string, habitat: string) => {
    const animal = await db.animal.update({
        where: {
            id: id
        },
        data: {
            prenom: prenom,
            race: race,
            habitat:habitat
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

    