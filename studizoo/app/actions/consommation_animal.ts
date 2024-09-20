"use server"

import { db } from "@/lib/db";
import { consommation_animalSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllConsommationAnimalFromDb = async () => {
    try{
        const consommation_animal = await db.consommation_animal.findMany({
            include: {
                animal: {
                    select: {
                        prenom: true
                    }
                }
            }
        });
        return consommation_animal
    }
    catch (error){
        console.log(`Error at getConsommationAnimalFromDb: ${error}`)
        return null
    }
}

export const getConsommationAnimalFromDb = async (id: number) => {
    try{
        const consommation_animal = await db.consommation_animal.findFirst({
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
        return consommation_animal
    }
    catch (error){
        console.log(`Error at getConsommationAnimalFromDb: ${error}`)
        return null
    }
}


export const createConsommationAnimalInDb = async (consommation_animal:z.infer<typeof consommation_animalSchema>) => {
    try{
        await db.consommation_animal.create({
            data: consommation_animal,
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
        console.log(`Error at createConsommationAnimalInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la création de la consommation animal"}
    }
    revalidatePath("/employe/employeConsommationAnimal",'page');
    redirect("/employe/employeConsommationAnimal")
}


export const updateConsommationAnimalInDb = async (id:number, consommation_animal:z.infer<typeof consommation_animalSchema>) => {
    try{
        await db.consommation_animal.update({
            where: {
                id: id
            },
            data: consommation_animal,
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
        console.log(`Error at updateConsommationAnimalInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la modification de la consommation animal"}
    }
    revalidatePath("/employe/employeConsommationAnimal",'page');
    redirect("/employe/employeConsommationAnimal")
}

export const deleteConsommationAnimalInDb = async (id: number) => {
    try{
        await db.consommation_animal.delete({
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
        console.log(`Error at deleteConsommationAnimalInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la suppression de la consommation animal"}
    }
    revalidatePath("/employe/employeConsommationAnimal",'page');
    redirect("/employe/employeConsommationAnimal")
}