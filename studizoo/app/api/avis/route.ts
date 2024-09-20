"use server"

import { db} from "@/lib/db";
import { avisSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { z } from "zod";


export async function GET () {
    try{
        const avis = await db.avis.findMany({
        });
        return avis
    }
    catch (error){
        console.log(`Error at getAvisFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération des avis" },
            { status: 500}
        )
    }
}


export async function POST (avis:z.infer<typeof avisSchema>) {
    try{
        await db.avis.create({
            data: avis
        })
    }
    catch (error){
        console.log(`Error at createAvisInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la création de l'avis" },
            { status: 500}
        )
    }
    revalidatePath("/employe/employeAvis",'page');
    redirect("/employe/employeAvis")
}