"use server"

import { db } from "@/lib/db";
import { consommation_animalSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { z } from "zod";


export async function GET () {
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
        return NextResponse.json(consommation_animal, {
            status: 200
        })
    }
    catch (error){
        console.log(`Error at getConsommationAnimalFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération des consommations animal" },
            { status: 500}
        )
    }
}

export async function POST (consommation_animal:z.infer<typeof consommation_animalSchema>) {
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
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la création de la consommation animal" },
            { status: 500}
        )
    }
    revalidatePath("/employe/employeConsommationAnimal",'page');
    redirect("/employe/employeConsommationAnimal")
}