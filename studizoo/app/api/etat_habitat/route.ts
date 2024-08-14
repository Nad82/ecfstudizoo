"use server"

import { db} from "@/lib/db";
import { etat_habitatSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllEtatHabitatFromDb = async () => {
    try{
        const etat_habitat = await db.etat_habitat.findMany();
        return etat_habitat
    }
    catch (error){
        console.log(`Error at getEtatHabitatFromDb: ${error}`)
        return null
    }
}

export const getEtatHabitatFromDb = async (id: number) => {
    try{
        const etat_habitat = await db.etat_habitat.findFirst({
            where: {
                id: id
            }
        })
        return etat_habitat
    }
    catch (error){
        console.log(`Error at getEtatHabitatFromDb: ${error}`)
        return null
    }
}

export const createEtatHabitatInDb = async (etat_habitat:z.infer<typeof etat_habitatSchema>) => {
    try{
        await db.etat_habitat.create({
            data: etat_habitat
        })
    }
    catch (error){
        console.log(`Error at createEtatHabitatInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la création de l'etat habitat"}
    }
    revalidatePath("/veterinaire/vetoEtatHabitat",'page');
    redirect("/veterinaire/vetoEtatHabitat")
}

export const updateEtatHabitatInDb = async (id: number, etat_habitat:z.infer<typeof etat_habitatSchema>) => {
    try{
        await db.etat_habitat.update({
            where: {
                id: id
            },
            data: etat_habitat
        })  
    }
    catch (error){
        console.log(`Error at updateEtatHabitatInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la modification de l'etat habitat"}
    }
    revalidatePath("/veterinaire/vetoEtatHabitat",'page');
    redirect("/veterinaire/vetoEtatHabitat")
}

export const deleteEtatHabitatInDb = async (id: number) => {
    try{
        await db.etat_habitat.delete({
            where: {
                id: id
            }
        })
    }
    catch (error){
        console.log(`Error at deleteEtatHabitatInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la suppression de l'etat habitat"}
    }
    revalidatePath("/veterinaire/vetoEtatHabitat",'page');
    redirect("/veterinaire/vetoEtatHabitat")
}