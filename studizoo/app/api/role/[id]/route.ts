"use server"

import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { roleSchema } from "@/lib/zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"


export const GET = async (params: { id: number }) => {
    try {
        const role = await db.role.findFirst({
            where: {
                id: params.id
            },
            include: {
                user: {
                    select: {
                        id: true
                    }
                }
            }
        })
        return NextResponse.json(role, {
            status: 200
        })
    }
    catch (error) {
        console.log(`Error at getRoleFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération du role" },
            { status: 500 }
        )
    }
}

export async function PUT (params: { id: number }, role:z.infer<typeof roleSchema>) {
    try {
        await db.role.update({
            where: {
                id: params.id
            },
            data: role
            }
        )
    }
    catch (error) {
        console.log(`Error at updateRoleInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la modification du role" },
            { status: 500 }
        )
    }
    revalidatePath('/adminmaster/adminmasterRole, page');
    redirect('/adminmaster/adminmasterRole')
}


export async function DELETE (params: { id: number }) {
    try {
        await db.role.delete({
            where: {
                id: params.id
            }
        })
    }
    catch (error) {
        console.log(`Error at deleteRoleInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la suppression du role" },
            { status: 500 }
        )
    }
    revalidatePath('/adminmaster/adminmasterRole, page');
    redirect('/adminmaster/adminmasterRole')
}