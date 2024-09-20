"use server"

import { db } from "@/lib/db";
import { image_animalSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { z } from "zod";


export async function GET() {
    try {
        const imageAnimal = await db.image_animal.findMany({
            include: {
                animal: {
                    select: {
                        prenom: true
                    }
                }
            }
        });
        return NextResponse.json(imageAnimal, {
            status: 200
        })
    } catch (error) {
        console.log(`Error at getAllImageAnimalFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération des images animal" },
            { status: 500 }
        )
    }
}


export async function POST (imageAnimal: z.infer<typeof image_animalSchema>) {
    try {
        await db.image_animal.create({
            data: imageAnimal,
            include: {
                animal: {
                    select: {
                        prenom: true
                    }
                }
            }
        })
    } catch (error) {
        console.log(`Error at createImageAnimalInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la création de l'image animal" },
            { status: 500 }
        )
    }
    revalidatePath("/administrateur/adminAnimal", 'page');
    redirect("/administrateur/adminAnimal")
}