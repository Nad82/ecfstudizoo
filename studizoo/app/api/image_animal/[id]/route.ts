"use server"

import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { image_animalSchema } from "@/lib/zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"


export async function GET(params: { id: number }) {
    try {
        const imageAnimal = await db.image_animal.findFirst({
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
        return NextResponse.json(imageAnimal, {
            status: 200
        })
    }
    catch (error) {
        console.log(`Error at getImageAnimalFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération de l'image animal" },
            { status: 500 }
        )
    }
}

export async function PUT (params:{id:number}, imageAnimal:z.infer<typeof image_animalSchema>) {
    try {
        await db.image_animal.update({
            where: {
                id: params.id
            },
            data: imageAnimal
        })
    } catch (error) {
        console.log(`Error at updateImageAnimalInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la modification de l'image animal" },
            { status: 500 }
        )
    }
    revalidatePath("/administrateur/adminAnimal", 'page');
    redirect("/administrateur/adminAnimal")
}

export async function DELETE (params:{id:number}) {
    try {
        await db.image_animal.delete({
            where: {
                id: params.id
            }
        })
    } catch (error) {
        console.log(`Error at deleteImageAnimalInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la suppression de l'image animal" },
            { status: 500 }
        )
    }
    revalidatePath("/administrateur/adminAnimal", 'page');
    redirect("/administrateur/adminAnimal")
}