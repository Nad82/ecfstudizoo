"use server"

import { db } from "@/lib/db";
import { compte_renduSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { z } from "zod";


export async function GET () {
    try{
        const compte_rendu = await db.compte_rendu.findMany({
            relationLoadStrategy: 'query',
            include: {
                animal: {
                    select: {
                        prenom: true
                    }
                },
            }
        });
        return NextResponse.json(compte_rendu, {
            status: 200
        })
    }
    catch (error){
        console.log(`Error at getCompteRenduFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération des comptes rendus" },
            { status: 500}
        )
    }
}


export async function POST (compte_rendu:z.infer<typeof compte_renduSchema>) {
    try{
        await db.compte_rendu.create({
            relationLoadStrategy: 'query',
            data: compte_rendu,
            include: {
                animal: {
                    select: {
                        prenom: true
                    }
                }
            }
        })
    }
    catch (error){
        console.log(`Error at createCompteRenduInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la création du compte rendu" },
            { status: 500}
        )
    }
    revalidatePath("/veterinaire/vetoCompteRendus",'page');
    redirect("/veterinaire/vetoCompteRendus") 
}