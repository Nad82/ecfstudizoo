"use server"

import { NextResponse } from "next/server"
import { db} from "@/lib/db";
import { habitatSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";


export async function GET(params: {id: number}) {
    try{
        const habitat = await db.habitat.findFirst({
            where: {
                id: params.id
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
        return NextResponse.json(habitat, {
            status: 200
        })
    }
    catch (error){
        console.log(`Error at getHabitatFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération de l'habitat" },
            { status: 500}
        )
}}

export async function PUT (params: {id: number},habitat:z.infer<typeof habitatSchema>) {
    try{
        await db.habitat.update({
            where: {
                id: params.id
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
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la modification de l'habitat" },
            { status: 500}
        )
    }
    revalidatePath("/administrateur/adminHabitats",'page');
    redirect("/administrateur/adminHabitats")
}

export async function DELETE (params: {id: number}) {
    try{
        await db.habitat.delete({
            where: {
                id: params.id
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
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la suppression de l'habitat" },
            { status: 500}
        )
    }
    revalidatePath("/administrateur/adminHabitats",'page');
    redirect("/administrateur/adminHabitats")
}