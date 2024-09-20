"use server"

import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { servicesSchema } from "@/lib/zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"


export async function GET (params: {id:number}) {
    try {
        const services = await db.services.findFirst({
            where: {
                id: params.id
            }
        })
        return NextResponse.json(services, {
            status: 200
        })
    }
    catch (error) {
        console.log(`Error at getServicesFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération du services" },
            { status: 500 }
        )
    }
}

export async function PUT (params: {id:number}, services: z.infer<typeof servicesSchema>) {
    try {
        await db.services.update({
            where: {
                id: params.id
            },
            data: services
        })
    }
    catch (error) {
        console.log(`Error at updateServicesInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la modification du services" },
            { status: 500 }
        )
    }
    revalidatePath("/employe/employeServices,page")
    redirect("/employe/employeServices")
}

export async function DELETE (params: {id:number}) {
    try {
        await db.services.delete({
            where: {
                id: params.id
            }
        })
    }
    catch (error) {
        console.log(`Error at deleteServicesInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la suppression du services" },
            { status: 500 }
        )
    }
    revalidatePath("/employe/employeServices,page")
    redirect("/employe/employeServices")
}
