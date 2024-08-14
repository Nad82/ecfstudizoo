"use server"

import { db} from "@/lib/db";
import { image_habitatSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllImageHabitatFromDb = async () => {
    try {
        const imageHabitat = await db.image_habitat.findMany();
        return imageHabitat
    }
    catch (error) {
        console.log(`Error at getAllImageHabitatFromDb: ${error}`)
        return null
    }
}

export const getImageHabitatFromDb = async (id: number) => {
    try {
        const imageHabitat = await db.image_habitat.findFirst({
            where: {
                id: id
            }
        })
        return imageHabitat
    }
    catch (error) {
        console.log(`Error at getImageHabitatFromDb: ${error}`)
        return null
    }
}

export const createImageHabitatInDb = async (imageHabitat:z.infer<typeof image_habitatSchema>) => {
    try {
        await db.image_habitat.create({
            data: imageHabitat
        })
    }
    catch (error) {
        console.log(`Error at createImageHabitatInDb: ${error}`)
        return { error: "Une erreur est survenue lors de la création de l'image habitat" }
    }
    revalidatePath("/administrateur/adminAnimal", 'page');
    redirect("/administrateur/adminAnimal")
}

export const updateImageHabitatInDb = async (id: number, imageHabitat:z.infer<typeof image_habitatSchema>) => {
    try {
        await db.image_habitat.update({
            where: {
                id: id
            },
            data: imageHabitat
            }
        )
    }
    catch (error) {
        console.log(`Error at updateImageHabitatInDb: ${error}`)
        return { error: "Une erreur est survenue lors de la mise à jour de l'image habitat" }
    }
    revalidatePath("/administrateur/adminAnimal", 'page');
    redirect("/administrateur/adminAnimal")
}


export const deleteImageHabitatInDb = async (id: number) => {
    try {
        await db.image_habitat.delete({
            where: {
                id: id
            }
        })
    }
    catch (error) {
        console.log(`Error at deleteImageHabitatInDb: ${error}`)
        return { error: "Une erreur est survenue lors de la suppression de l'image habitat" }
    }
    revalidatePath("/administrateur/adminAnimal", 'page');
    redirect("/administrateur/adminAnimal")
}