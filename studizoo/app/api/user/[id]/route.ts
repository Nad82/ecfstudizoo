"use server"

import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { userSchema } from "@/lib/zod"
import { revalidatePath } from "next/cache"
import { z } from "zod"
import bcrypt from "bcryptjs"
import { auth } from "@/app/auth"
import { redirect } from "next/navigation"


export async function GET (params: {id:number}) {
    try {
        const session = await auth()
        if (session && session?.user?.role !== "administrateur") {
            return NextResponse.json(
                { error: "Vous n'avez pas les droits pour effectuer cette action" },
                { status: 403}
            )
        }
        const user = await db.user.findUnique({
            where: {
                id: params.id
            }
        })
        return NextResponse.json(user, {
            status: 200
        })
    } catch (error) {
        console.log(`Error at getUserFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération de l'utilisateur" },
            { status: 500}
        )
    }
}

export async function PUT (params: {id:number},user:z.infer<typeof userSchema>) {
    try {
        const session = await auth()
        if (session && session?.user?.role !== "administrateur") {
            return NextResponse.json(
                { error: "Vous n'avez pas les droits pour effectuer cette action" },
                { status: 403}
            )
        }
        const hashedPassword = await bcrypt.hash(user.password, 10)
        await db.user.update({
            where: {
                id: params.id
            },
            data: {
                ...user,
                password: hashedPassword
            }
        })
    }
    catch (error) {
        console.log(`Error at updateUserInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la modification de l'utilisateur" },
            { status: 500 }
        )
    }
    revalidatePath  ("/administrateur/adminUser",'page');
    redirect("/administrateur/adminUser")
}

export async function DELETE (params: {id:number}) {
    try{    
        const session = await auth()
        if (session && session?.user?.role !== "administrateur") {
            return NextResponse.json(
                { error: "Vous n'avez pas les droits pour effectuer cette action" },
                { status: 403}
            )
        }
        await db.user.delete({
            where: {
                id: params.id
            }
        })
    }
    catch (error){
        console.log(`Error at deleteUserInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la suppression de l'utilisateur" },
            {status: 500}
        )
    }
    revalidatePath  ("/administrateur/adminUser",'page');
    redirect("/administrateur/adminUser")
}