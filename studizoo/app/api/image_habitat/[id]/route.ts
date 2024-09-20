"use server"

import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { image_habitatSchema } from "@/lib/zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"


export async function GET(params: { id: number }) {
    try {
        const imageHabitat = await db.image_habitat.findFirst({
            where: {
                id: params.id
            },
            include: {
                habitat: {
                    select: {
                        nom: true
                    }
                }
            }
        })
        return NextResponse.json(imageHabitat, {
            status: 200
        })
    }
    catch (error) {
        console.log(`Error at getImageHabitatFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération de l'image habitat" },
            { status: 500 }
        )
    }
}

export async function PUT (params: { id: number }, imageHabitat:z.infer<typeof image_habitatSchema>) {
    try {
        await db.image_habitat.update({
            where: {
                id: params.id
            },
            data: imageHabitat
            }
        )
    }
    catch (error) {
        console.log(`Error at updateImageHabitatInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la modification de l'image habitat" },
            { status: 500 }
        )
    }
    revalidatePath("/administrateur/adminImageHabitat", 'page');
    redirect("/administrateur/adminImageHabitat")
}


export async function DELETE (params: { id: number }) {
    try {
        await db.image_habitat.delete({
            where: {
                id: params.id
            }
        })
    }
    catch (error) {
        console.log(`Error at deleteImageHabitatInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la suppression de l'image habitat" },
            { status: 500 }
        )
    }
    revalidatePath("/administrateur/adminImageHabitat", 'page');
    redirect("/administrateur/adminImageHabitat")
}