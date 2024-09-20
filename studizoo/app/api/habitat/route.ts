"use server"

import { db } from "@/lib/db";
import { habitatSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { z } from "zod";


export async function GET() {
    try{
        const habitat = await db.habitat.findMany({
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
                }
            }
        });
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
    }
}


export async function POST (habitat:z.infer<typeof habitatSchema>) {
    try{
        await db.habitat.create({
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
        console.log(`Error at createHabitatInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la création de l'habitat" },
            { status: 500}
        )
    }
    revalidatePath("/administrateur/adminHabitats",'page');
    redirect("/administrateur/adminHabitats")
}