"use server"

import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { compte_renduSchema } from "@/lib/zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"


export async function GET (params: {id: number}) {
    try{
        const compte_rendu = await db.compte_rendu.findFirst({
            relationLoadStrategy: 'query',
            where: {
                id: params.id
            },
            include: {
                animal: {
                    select: {
                        prenom: true
                    }
                }
            }    
        })
        return NextResponse.json(compte_rendu, {
            status: 200
        })
    }
    catch (error){
        console.log(`Error at getCompteRenduFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération du compte rendu" },
            { status: 500}
        )
    }
}

export async function PUT (params: {id: number}, compte_rendu:z.infer<typeof compte_renduSchema>) {
    try{
        await db.compte_rendu.update({
            relationLoadStrategy: 'query',
            where: {
                id: params.id
            },
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
        console.log(`Error at updateCompteRenduInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la modification du compte rendu" },
            { status: 500}
        )
    }
    revalidatePath("/veterinaire/vetoCompteRendus",'page');
    redirect("/veterinaire/vetoCompteRendus") 
}

export async function DELETE (params: {id: number}) {
    try{
        await db.compte_rendu.delete({
            relationLoadStrategy: 'query',
            where: {
                id: params.id
            },
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
        console.log(`Error at deleteCompteRenduInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la suppression du compte rendu" },
            { status: 500}
        )
    }
    revalidatePath("/veterinaire/vetoCompteRendus",'page');
    redirect("/veterinaire/vetoCompteRendus")
}