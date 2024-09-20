"use server"

import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { consommation_animalSchema } from "@/lib/zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"


export async function GET (params: {id: number}) {
    try{
        const consommation_animal = await db.consommation_animal.findFirst({
            where: {
                id: params.id
            },
            include: {
                animal: {
                    select: {
                        prenom: true
                    }
                }
            }
        })
        return NextResponse.json(consommation_animal, {
            status: 200
        })
    }
    catch (error){
        console.log(`Error at getConsommationAnimalFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération de la consommation animal" },
            { status: 500}
        )
    }
}

export async function PUT (params: {id: number}, consommation_animal:z.infer<typeof consommation_animalSchema>) {
    try{
        await db.consommation_animal.update({
            where: {
                id: params.id
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
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la modification de la consommation animal" },
            { status: 500}
        )
    }
    revalidatePath("/employe/employeConsommationAnimal",'page');
    redirect("/employe/employeConsommationAnimal")
}

export async function DELETE (params: {id: number}) {
    try{
        await db.consommation_animal.delete({
            where: {
                id: params.id
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
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la suppression de la consommation animal" },
            { status: 500}
        )
    }
    revalidatePath("/employe/employeConsommationAnimal",'page');
    redirect("/employe/employeConsommationAnimal")
}
