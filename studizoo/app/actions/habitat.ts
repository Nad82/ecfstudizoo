"use server"

import { db } from "@/lib/db";
import { habitatSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllHabitatFromDb = async () => {
    try{
        const habitat = await db.habitat.findMany({
            include: {
                etat_habitat: {
                    select: {
                        id: true
                    }
                },
                image_habitat: {
                    select: {
                        nom: true
                }},
                animal: {
                    select: {
                        prenom: true
                    }
                }
            }
        });
        return habitat
    }
    catch (error){
        console.log(`Error at getHabitatFromDb: ${error}`)
        return null
    }
}

export const getHabitatFromDb = async (id: number) => {
    try{
        const habitat = await db.habitat.findFirst({
            where: {
                id: id
            },
            include: {
                etat_habitat: {
                    select: {
                        id: true
                    }
                },
                image_habitat: {
                    select: {
                        nom: true
                }},
                animal: {
                    select: {
                        prenom: true
                    }
            }}
        })
        return habitat
    }
    catch (error){
        console.log(`Error at getHabitatFromDb: ${error}`)
        return null
    }
}

export const createHabitatInDb = async (habitat:z.infer<typeof habitatSchema>) => {
    try{
        await db.habitat.create({
            data: habitat,
            include: {
                image_habitat: {
                    select: {
                        nom: true
                }}
            }
        })
    }
    catch (error){
        console.log(`Error at createHabitatInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la création de l'habitat"}
    }
    revalidatePath("/administrateur/adminHabitats",'page');
    redirect("/administrateur/adminHabitats")
}

export const updateHabitatInDb = async (id: number,habitat:z.infer<typeof habitatSchema>) => {
    try{
        await db.habitat.update({
            where: {
                id: id
            },
            data: habitat,
            include: {
                image_habitat: {
                    select: {
                        nom: true
                }}
            }
        })
    }
    catch (error){
        console.log(`Error at updateHabitatInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la mise à jour de l'habitat"}
    }
    revalidatePath("/administrateur/adminHabitats",'page');
    redirect("/administrateur/adminHabitats")
}

export const deleteHabitatInDb = async (id: number) => {
    try{
        await db.habitat.delete({
            where: {
                id: id
            },
            include: {
                image_habitat: {
                    select: {
                        nom: true
                }}
            }
        })
    }
    catch (error){
        console.log(`Error at deleteHabitatInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la suppression de l'habitat"}
    }
    revalidatePath("/administrateur/adminHabitats",'page');
    redirect("/administrateur/adminHabitats")
}