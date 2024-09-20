"use server"

import { db} from "@/lib/db";
import { avisSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { z } from "zod";

export const getAllAvisFromDb = async () => {
    try{
        const avis = await db.avis.findMany();
        return avis
    }
    catch (error){
        console.log(`Error at getAvisFromDb: ${error}`)
        return null
    }
}

export const getAvisFromDb = async (id: number) => {
    try{
        const avis = await db.avis.findUnique({
            where: {
                id: id
            }
        })
        return avis
    }
    catch (error){
        console.log(`Error at getAvisFromDb: ${error}`)
        return null
    }
}

export const createAvisInDb = async (avis:z.infer<typeof avisSchema>) => {
    try{
        await db.avis.create({
            data: avis
        })
        NextResponse.json({message:"Avis créé avec succès"},{status:201})
    }
    catch (error){
        console.log(`Error at createAvisInDb: ${error}`)
        return NextResponse.json({error:"Une erreur est survenue lors de la création de l'avis"},{status:500})  
    }
    revalidatePath("/",'page');
    redirect("/")
}


export const updateAvisInDb = async (id: number, avis:z.infer<typeof avisSchema>) => {
    try{
        await db.avis.update({
            where: {
                id: id
            },
            data: avis
        })
    }
    catch (error){
        console.log(`Error at updateAvisInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la mise à jour de l'avis"}
    }
    revalidatePath("/employe/employeAvis",'page');
    redirect("/employe/employeAvis")
}

export const deleteAvisInDb = async (id: number) => {
    try{
        await db.avis.delete({
            where: {
                id: id
            }
        })
    }
    catch (error){
        console.log(`Error at deleteAvisInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la suppression de l'avis"}
    }
}