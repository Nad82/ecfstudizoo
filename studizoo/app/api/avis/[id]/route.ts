import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { avisSchema } from "@/lib/zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"



export async function GET (params: {id: number}) {
    try{
        const avis = await db.avis.findUnique({
            where: {
                id: params.id
            }
        })
        return NextResponse.json(avis, {
            status: 200
        })
    }
    catch (error){
        console.log(`Error at getAvisFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération de l'avis" },
            { status: 500}
        )
    }
}

export async function PUT (params: {id: number}, avis:z.infer<typeof avisSchema>) {
    try{
        await db.avis.update({
            where: {
                id: params.id
            },
            data: avis
        })
    }
    catch (error){
        console.log(`Error at updateAvisInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la modification de l'avis" },
            { status: 500}
        )
    }
    revalidatePath("/employe/employeAvis",'page');
    redirect("/employe/employeAvis")
}

export async function DELETE (params: {id: number}) {
    try{
        await db.avis.delete({
            where: {
                id: params.id
            }
        })
    }
    catch (error){
        console.log(`Error at deleteAvisInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la suppression de l'avis" },
            { status: 500}
        )
    }
    revalidatePath("/employe/employeAvis",'page');
    redirect("/employe/employeAvis")
}