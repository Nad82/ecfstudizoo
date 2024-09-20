"use server"

import { db } from "@/lib/db"
import { NextResponse } from "next/server"
import { z } from "zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { animalSchema } from "@/lib/zod"


export async function GET (params: {id: number}) {
    try{
        const animalId = await db.animal.findFirst({
            relationLoadStrategy: 'query',
            where: {
                id: params.id
            },
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
        return NextResponse.json(animalId, {
            status: 200
        })
    }
    catch (error){
        console.log(`Error at getAnimalFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération de l'animal" },
            { status: 500}
        )
    }
}

export async function PUT (params: {id: number}, animal:z.infer<typeof animalSchema>) {
    try{
        await db.animal.update({
            relationLoadStrategy: 'query',
            where: {
                id: params.id
            },
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
                }
            }
        })
    }
    catch (error){
        console.log(`Error at updateAnimalInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la mise à jour de l'animal" },
            { status: 500}
        )
    }
    revalidatePath("/administrateur/adminAnimal",'page');
    redirect("/administrateur/adminAnimal")
}

export async function DELETE (params: {id: number}) {
    try{
        await db.animal.delete({
            relationLoadStrategy: 'query',
            where: {
                id: params.id
            },
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
                }
            }
        })
    }
    catch (error){
        console.log(`Error at deleteAnimalInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la suppression de l'animal" },
            { status: 500}
        )
    }
    revalidatePath("/administrateur/adminAnimal",'page');
    redirect("/administrateur/adminAnimal")
}
