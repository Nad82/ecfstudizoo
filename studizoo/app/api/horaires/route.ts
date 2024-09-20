"use server"

import { db } from "@/lib/db";
import { horairesSchema } from "@/lib/zod";
import { revalidatePath} from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { z } from "zod";


export async function GET() {
    try{
        const horaires = await db.horaires.findMany();
        return NextResponse.json(horaires, {
            status: 200
        })
    } catch (error){
        console.log(`Error at getHorairesFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération des horaires" },
            { status: 500}
        )
    }    
}


export async function POST (horaires:z.infer<typeof horairesSchema>) {
    try{
        await db.horaires.create({
            data: horaires
        })
    } catch (error){
        console.log(`Error at createHorairesInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la création des horaires" },
            { status: 500}
        )
    }
    revalidatePath("/administrateur/adminHoraires",'page');
    redirect("/administrateur/adminHoraires")
}