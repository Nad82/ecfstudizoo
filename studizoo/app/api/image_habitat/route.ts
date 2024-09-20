"use server"

import { db} from "@/lib/db";
import { image_habitatSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { z } from "zod";


export async function GET() {
    try {
        const imageHabitat = await db.image_habitat.findMany({
            include: {
                habitat: {
                    select: {
                        nom: true
                    }
                }
            }
        });
        return NextResponse.json(imageHabitat, {
            status: 200
        })
    }
    catch (error) {
        console.log(`Error at getAllImageHabitatFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération des images habitat" },
            { status: 500 }
        )
    }
}

export async function POST (imageHabitat:z.infer<typeof image_habitatSchema>) {
    try {
        await db.image_habitat.create({
            data: imageHabitat,
            include: {
                habitat: {
                    select: {
                        nom: true
                    }
                }
            }
        })
    }
    catch (error) {
        console.log(`Error at createImageHabitatInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la création de l'image habitat" },
            { status: 500 }
        )
    }
    revalidatePath("/administrateur/adminImageHabitat", 'page');
    redirect("/administrateur/adminImageHabitat")
}