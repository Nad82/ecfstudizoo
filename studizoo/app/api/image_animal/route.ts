"use server"

import { db } from "@/lib/db";
import { image_animalSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";


export const getAllImageAnimalFromDb = async () => {
    try {
        const imageAnimal = await db.image_animal.findMany({
            include: {
                animal: {
                    select: {
                        prenom: true
                    }
                }
            }
        });
        return imageAnimal
    } catch (error) {
        console.log(`Error at getAllImageAnimalFromDb: ${error}`)
        return null
    }
}

export const getImageAnimalFromDb = async (id: number) => {
    try {
        const imageAnimal = await db.image_animal.findFirst({
            where: {
                id: id
            },
            include: {
                animal: {
                    select: {
                        prenom: true
                    }
                }
            }
        })
        return imageAnimal
    }
    catch (error) {
        console.log(`Error at getImageAnimalFromDb: ${error}`)
        return null
    }
}

export const createImageAnimalInDb = async (imageAnimal: z.infer<typeof image_animalSchema>) => {
    try {
        await db.image_animal.create({
            data: imageAnimal
        })
    } catch (error) {
        console.log(`Error at createImageAnimalInDb: ${error}`)
        return { error: "Une erreur est survenue lors de la création de l'image animal" }
    }
    revalidatePath("/administrateur/adminAnimal", 'page');
    redirect("/administrateur/adminAnimal")
}


export const updateImageAnimalInDb = async (id: number, imageAnimal:z.infer<typeof image_animalSchema>) => {
    try {
        await db.image_animal.update({
            where: {
                id: id
            },
            data: imageAnimal
        })
    } catch (error) {
        console.log(`Error at updateImageAnimalInDb: ${error}`)
        return { error: "Une erreur est survenue lors de la mise à jour de l'image animal" }
    }
    revalidatePath("/administrateur/adminAnimal", 'page');
    redirect("/administrateur/adminAnimal")
}

export const deleteImageAnimalInDb = async (id: number) => {
    try {
        await db.image_animal.delete({
            where: {
                id: id
            }
        })
    } catch (error) {
        console.log(`Error at deleteImageAnimalInDb: ${error}`)
        return { error: "Une erreur est survenue lors de la suppression de l'image animal" }
    }
    revalidatePath("/administrateur/adminAnimal", 'page');
    redirect("/administrateur/adminAnimal")
}