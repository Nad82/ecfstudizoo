import { db } from "@/lib/db";

export const getAllImageAnimalFromDb = async () => {
    const imageAnimal = await db.image_animal.findMany();
    return imageAnimal
}

export const getImageAnimalFromDb = async (id: number) => {
    const imageAnimal = await db.image_animal.findFirst({
        where: {
            id: id
        }
    })
    return imageAnimal || null
}

export const createImageAnimalInDb = async (nom:string) => {
    const imageAnimal = await db.image_animal.create({
        data: {
            nom:nom
        }
    })
    return imageAnimal
}

export const updateImageAnimalInDb = async (id: number, nom:string) => {
    const imageAnimal = await db.image_animal.update({
        where: {
            id: id
        },
        data: {
            nom:nom
        }
    })
    return imageAnimal
}

export const deleteImageAnimalInDb = async (id: number) => {
    const imageAnimal = await db.image_animal.delete({
        where: {
            id: id
        }
    })
    return imageAnimal
}

