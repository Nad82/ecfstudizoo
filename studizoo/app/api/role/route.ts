"use server"

import { db } from "@/lib/db";
import { roleSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { z } from "zod";


export async function GET() {
    try {
        const role = await db.role.findMany({
            include: {
                user: {
                    select: {
                        id: true
                    }
                }
            }
        });
        return NextResponse.json(role, {
            status: 200
        })
    }
    catch (error) {
        console.log(`Error at getAllRoleFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération des roles" },
            { status: 500 }
        )
    }
}

export async function POST (role:z.infer<typeof roleSchema>) {
    try {
        await db.role.create({
            data: role
        })
    }
    catch (error) {
        console.log(`Error at createRoleInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la création du role" },
            { status: 500 }
        )
    }
    revalidatePath('/adminmaster/adminmasterRole, page');
    redirect('/adminmaster/adminmasterRole')
}