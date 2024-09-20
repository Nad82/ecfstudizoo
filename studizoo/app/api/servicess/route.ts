"use server"

import { db } from "@/lib/db";
import { servicesSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { z } from "zod";


export async function GET() {
    try {
        const services = await db.services.findMany();
        return NextResponse.json(services, {
            status: 200
        })
    }
    catch (error) {
        console.log(`Error at getAllServicesFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération des services" },
            { status: 500 }
        )
    }
}


export async function POST (services: z.infer<typeof servicesSchema>) {
    try {
        await db.services.create({
            data: services
        })
    }
    catch (error) {
        console.log(`Error at createServicesInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la création du services" },
            { status: 500 }
        )
    }
    revalidatePath("/administrateur/adminServices,page")
    redirect("/administrateur/adminServices")
}