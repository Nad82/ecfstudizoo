"use server"

import { db } from "@/lib/db";
import { userSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { auth } from "@/app/auth";
import { NextResponse } from "next/server";
import { headers } from "next/headers";



export const getAllUserFromDb = async () => {
    try {

        const session = await auth()
        if (session && session?.user?.role !== "administrateur") {
            return NextResponse.json(
                { error: "Vous n'avez pas les droits pour effectuer cette action" },
                { status: 403}
            )
        }
        const user = await db.user.findMany();
        return user
    } catch (error) {
        console.log(`Error at getAllUserFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération des utilisateurs" },
            { status: 500}
        )
    }
}

export const getUserFromDb = async (id: number) => {
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
                id: id
            }
        })
        return user
    } catch (error) {
        console.log(`Error at getUserFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération de l'utilisateur" },
            { status: 500}
        )
    }
}

export const createUserInDb = async (user: z.infer<typeof userSchema>) => {
    try {
        const session = await auth()
        if (session && session?.user?.role !== "administrateur") {
            return NextResponse.json(
                { error: "Vous n'avez pas les droits pour effectuer cette action" },
                { status: 403}
            )
        }
        const hashedPassword = await bcrypt.hash(user.password, 10)
        await db.user.create({
            data: {
                ...user,
                password: hashedPassword
            },
            include: {
                role: {
                    select: {
                        nom: true
                    }
                }
            }
        })
    }
    catch (error) {
        console.log(`Error at createUserInDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la création de l'utilisateur" },
            { status: 500 }
        )
    }
    revalidatePath("/administrateur/adminUser", 'page');
    redirect("/administrateur/adminUser")
}

export const updateUserInDb = async (id: number,user:z.infer<typeof userSchema>) => {
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
                id: id
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

export const deleteUserInDb = async (id: number) => {
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
                id: id
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