"use server"

import { db} from "@/lib/db";
import { etat_habitatSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function GET() {
    try{
        const etat_habitat = await db.etat_habitat.findMany({
            include: {
                habitat: {
                    select: {
                        nom: true
                    }
                }
            }
        });
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


export async function POST (etat_habitat:z.infer<typeof etat_habitatSchema>) {
    try{
        await db.etat_habitat.create({
            data: etat_habitat,
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
        console.log(`Error at createEtatHabitatInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la création de l'etat habitat" },
            { status: 500}
        )
    }
    revalidatePath("/veterinaire/vetoEtatHabitat",'page');
    redirect("/veterinaire/vetoEtatHabitat")
}