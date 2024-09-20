"use server"

import { db} from "@/lib/db";
import { animalSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { z } from "zod";


export async function GET ()  {
    try{
        const animals = await db.animal.findMany({
            relationLoadStrategy: 'query',
            include: {
                habitat: {
                    select: {
                        nom: true
                    }
                },
                image_animal: {
                    select: {
                        nom: true
                    }
                },
                compte_rendu: true,
                consommation_animal: {
                    select: {
                        id: true
                    }
                }
            }}
        );
        return NextResponse.json(animals, {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    catch (error){
        console.log(`Error at getAnimalFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération des animaux" },
            { status: 500}
        )
    }
}

export async function POST (animal:z.infer<typeof animalSchema>) {
    try {
        await db.animal.create({
            data: animal,
            include: {
                habitat: {
                    select: {
                        nom: true
            }
        },
        image_animal: {
            select: {
                nom: true
            }
        },
        compte_rendu: true,
        consommation_animal: {
            select: {
                id: true
            }
        }
    }
    })

    } catch (error) {
        console.error(`Error at createAnimalInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la création de l'animal" },
            { status: 500}
        )
    }
    revalidatePath("/administrateur/adminAnimal",'page');
    redirect("/administrateur/adminAnimal")
}