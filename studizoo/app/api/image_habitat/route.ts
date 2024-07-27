import { db} from "@/lib/db";

export const getAllImageHabitatFromDb = async () => {
    const imageHabitat = await db.image_habitat.findMany();
    return imageHabitat
}

export const getImageHabitatFromDb = async (id: number) => {
    const imageHabitat = await db.image_habitat.findFirst({
        where: {
            id: id
        }
    })
    return imageHabitat || null
}

export const createImageHabitatInDb = async (nom:string) => {
    const imageHabitat = await db.image_habitat.create({
        data: {
            nom:nom
        }
    })
    return imageHabitat
}

export const updateImageHabitatInDb = async (id: number, nom:string) => {
    const imageHabitat = await db.image_habitat.update({
        where: {
            id: id
        },
        data: {
            nom:nom
        }
    })
    return imageHabitat
}

export const deleteImageHabitatInDb = async (id: number) => {
    const imageHabitat = await db.image_habitat.delete({
        where: {
            id: id
        }
    })
    return imageHabitat
}