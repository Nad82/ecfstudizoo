import { db } from "@/lib/db";
import { horairesSchema } from "@/lib/zod";
import { unstable_noStore as noStore} from "next/cache";
import { z } from "zod";

export const getAllHorairesFromDb = async () => {
    noStore();
    try{
        const horaires = await db.horaires.findMany();
        return horaires
    } catch (error){
        console.log(`Error at getHorairesFromDb: ${error}`)
        return null
    }    
}

export const getHorairesFromDb = async (id: number) => {
    noStore();
    try{
        const horaires = await db.horaires.findUnique({
            where: {
                id: id
            }
        })
        return horaires || null
    }
    catch (error){
        console.log(`Error at getHorairesFromDb: ${error}`)
        return null
    }
}

export const createHorairesInDb = async (horaires:z.infer<typeof horairesSchema>) => {
    noStore();
    try{
        await db.horaires.create({
            data: horaires
        })
        return {error:""}
    } catch (error){
        console.log(`Error at createHorairesInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la création des horaires"}
    }
}


export const updateHorairesInDb = async (id: number, horaires:z.infer<typeof horairesSchema>) => {
    noStore();
    try{
        await db.horaires.update({
            where: {
                id: id
            },
            data: horaires
        })
        return {error:""}
    } catch (error){
        console.log(`Error at updateHorairesInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la mise à jour des horaires"}
    }
}

export const deleteHorairesInDb = async (id: number) => {
    noStore();
    try{
        await db.horaires.delete({
            where: {
                id: id
            }
        })
        return {error:""}
    } catch (error){
        console.log(`Error at deleteHorairesInDb: ${error}`)
        return null
    }
}