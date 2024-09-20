"use server"

import { NextResponse } from "next/server"
import { db} from "@/lib/db";
import { horairesSchema } from "@/lib/zod";
import { revalidatePath} from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";


export async function GET(params: {id: number}) {
    try{
        const horaires = await db.horaires.findUnique({
            where: {
                id: params.id
            }
        })
        return horaires
    } catch (error){
        console.log(`Error at getHorairesFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération des horaires" },
            { status: 500}
        )
    }
}

export async function PUT (id: number, horaires:z.infer<typeof horairesSchema>) {
    try{
        await db.horaires.update({
            where: {
                id: id
            },
            data: horaires
        })
    } catch (error){
        console.log(`Error at updateHorairesInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la modification des horaires" },
            { status: 500}
        )
    }
    revalidatePath("/administrateur/adminHoraires",'page');
    redirect("/administrateur/adminHoraires")
}

export async function DELETE (params: {id: number}) {
    try{
        await db.horaires.delete({
            where: {
                id: params.id
            }
        })
    } catch (error){
        console.log(`Error at deleteHorairesInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la suppression des horaires" },
            { status: 500}
        )
    }
    revalidatePath("/administrateur/adminHoraires",'page');
    redirect("/administrateur/adminHoraires")
}