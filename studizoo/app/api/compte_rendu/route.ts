"use server"

import { db } from "@/lib/db";
import { compte_renduSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";


export const getAllCompteRenduFromDb = async () => {
    try{
        const compte_rendu = await db.compte_rendu.findMany({
            relationLoadStrategy: 'query',
            include: {
                animal: {
                    select: {
                        prenom: true
                    }
                },
            }
        });
        return compte_rendu
    }
    catch (error){
        console.log(`Error at getCompteRenduFromDb: ${error}`)
        return null
    }
}

export const getCompteRenduFromDb = async (id: number) => {
    try{
        const compte_rendu = await db.compte_rendu.findFirst({
            relationLoadStrategy: 'query',
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
        return compte_rendu
    }
    catch (error){
        console.log(`Error at getCompteRenduFromDb: ${error}`)
        return null
    }
}

export const createCompteRenduInDb = async (compte_rendu:z.infer<typeof compte_renduSchema>) => {
    try{
        await db.compte_rendu.create({
            relationLoadStrategy: 'query',
            data: compte_rendu,
            include: {
                animal: {
                    select: {
                        prenom: true
                    }
                }
            }
        })
    }
    catch (error){
        console.log(`Error at createCompteRenduInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la création du compte rendu"}
    }
    revalidatePath("/veterinaire/vetoCompteRendus",'page');
    redirect("/veterinaire/vetoCompteRendus") 
}
    

export const updateCompteRenduInDb = async (id: number, compte_rendu:z.infer<typeof compte_renduSchema>) => {
    try{
        await db.compte_rendu.update({
            relationLoadStrategy: 'query',
            where: {
                id: id
            },
            data: compte_rendu,
            include: {
                animal: {
                    select: {
                        prenom: true
                    }
                }
            }
        })
    }
    catch (error){
        console.log(`Error at updateCompteRenduInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la mise à jour du compte rendu"}
    }
    revalidatePath("/veterinaire/vetoCompteRendus",'page');
    redirect("/veterinaire/vetoCompteRendus") 
}

export const deleteCompteRenduInDb = async (id: number) => {
    try{
        await db.compte_rendu.delete({
            relationLoadStrategy: 'query',
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
    }
    catch (error){
        console.log(`Error at deleteCompteRenduInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la suppression du compte rendu"}
    }
    revalidatePath("/veterinaire/vetoCompteRendus",'page');
    redirect("/veterinaire/vetoCompteRendus")
}