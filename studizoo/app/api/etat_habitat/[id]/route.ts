"use server"

import { NextResponse } from "next/server"
import { db} from "@/lib/db";
import { etat_habitatSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";


export async function GET(params: {id: number}) {
    try{
        const etat_habitat = await db.etat_habitat.findFirst({
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
        return NextResponse.json(etat_habitat, {
            status: 200
        })
    }
    catch (error){
        console.log(`Error at getEtatHabitatFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération de l'etat habitat" },
            { status: 500}
        )
    }
}

export async function PUT (params: {id: number}, etat_habitat:z.infer<typeof etat_habitatSchema>)  {
    try{
        await db.etat_habitat.update({
            where: {
                id: params.id
            },
            data: etat_habitat,
            include: {
                habitat: {
                    select: {
                        nom: true || null
                    }
                }
            }
        })  
    }
    catch (error){
        console.log(`Error at updateEtatHabitatInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la modification de l'etat habitat" },
            { status: 500}
        )
    }
    revalidatePath("/veterinaire/vetoEtatHabitat",'page');
    redirect("/veterinaire/vetoEtatHabitat")
}

export async function DELETE(params: {id: number}) {
    try{
        await db.etat_habitat.delete({
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
    }
    catch (error){
        console.log(`Error at deleteEtatHabitatInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la suppression de l'etat habitat" },
            { status: 500}
        )
    }
    revalidatePath("/veterinaire/vetoEtatHabitat",'page');
    redirect("/veterinaire/vetoEtatHabitat")
}