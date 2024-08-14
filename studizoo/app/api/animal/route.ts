"use server"

import { db} from "@/lib/db";
import { animalSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllAnimalFromDb = async () => {
    try{
        const animal = await db.animal.findMany();
        return animal
    }
    catch (error){
        console.log(`Error at getAnimalFromDb: ${error}`)
        return null
    }
}

export const getAnimalFromDb = async (id: number) => {
    try{
        const animal = await db.animal.findUnique({
            where: {
                id: id
            }
        })
        return animal
    }
    catch (error){
        console.log(`Error at getAnimalFromDb: ${error}`)
        return null
    }
}

export const createAnimalInDb = async (animal:z.infer<typeof animalSchema>) => {
    try{
        await db.animal.create({
            data: animal
        })
    }
    catch (error){
        console.log(`Error at createAnimalInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la création de l'animal"}
    }
    revalidatePath("/administrateur/adminAnimal",'page');
    redirect("/administrateur/adminAnimal")
}

export const updateAnimalInDb = async (id: number, animal:z.infer<typeof animalSchema>) => {
    try{
        await db.animal.update({
            where: {
                id: id
            },
            data: animal
        })
    }
    catch (error){
        console.log(`Error at updateAnimalInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la mise à jour de l'animal"}
    }
    revalidatePath("/administrateur/adminAnimal",'page');
    redirect("/administrateur/adminAnimal")
}

export const deleteAnimalInDb = async (id: number) => {
    try{
        await db.animal.delete({
            where: {
                id: id
            }
        })
    }
    catch (error){
        console.log(`Error at deleteAnimalInDb: ${error}`)
        return null
    }
    revalidatePath("/administrateur/adminAnimal",'page');
    redirect("/administrateur/adminAnimal")
}
