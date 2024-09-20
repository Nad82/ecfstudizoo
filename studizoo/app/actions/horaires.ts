"use server"

import { db } from "@/lib/db";
import { horairesSchema } from "@/lib/zod";
import { revalidatePath} from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";


export const getAllHorairesFromDb = async () => {
    try{
        const horaires = await db.horaires.findMany();
        return horaires
    } catch (error){
        console.log(`Error at getHorairesFromDb: ${error}`)
        return null
    }    
}

export const getHorairesFromDb = async (id: number) => {
    try{
        const horaires = await db.horaires.findUnique({
            where: {
                id: id
            }
        })
        return horaires
    } catch (error){
        console.log(`Error at getHorairesFromDb: ${error}`)
        return null
    }
}

export const createHorairesInDb = async (horaires:z.infer<typeof horairesSchema>) => {
    try{
        await db.horaires.create({
            data: horaires
        })
    } catch (error){
        console.log(`Error at createHorairesInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la création des horaires"}
    }
    revalidatePath("/administrateur/adminHoraires",'page');
    redirect("/administrateur/adminHoraires")
}


export const updateHorairesInDb = async (id: number, horaires:z.infer<typeof horairesSchema>) => {
    try{
        await db.horaires.update({
            where: {
                id: id
            },
            data: horaires
        })
    } catch (error){
        console.log(`Error at updateHorairesInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la mise à jour des horaires"}
    }
    revalidatePath("/administrateur/adminHoraires",'page');
    redirect("/administrateur/adminHoraires")
}

export const deleteHorairesInDb = async (id: number) => {
    try{
        await db.horaires.delete({
            where: {
                id: id
            }
        })
    } catch (error){
        console.log(`Error at deleteHorairesInDb: ${error}`)
        return null
    }
    revalidatePath("/administrateur/adminHoraires",'page');
    redirect("/administrateur/adminHoraires")
}