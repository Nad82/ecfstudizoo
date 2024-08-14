"use server"

import { db } from "@/lib/db";
import { roleSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllRoleFromDb = async () => {
    try {
        const role = await db.role.findMany();
        return role
    }
    catch (error) {
        console.log(`Error at getAllRoleFromDb: ${error}`)
        return null
    }
}

export const getRoleFromDb = async (id: number) => {
    try {
        const role = await db.role.findFirst({
            where: {
                id: id
            }
        })
        return role
    }
    catch (error) {
        console.log(`Error at getRoleFromDb: ${error}`)
        return null
    }
}

export const createRoleInDb = async (role:z.infer<typeof roleSchema>) => {
    try {
        await db.role.create({
            data: role
        })
    }
    catch (error) {
        console.log(`Error at createRoleInDb: ${error}`)
        return { error: "Une erreur est survenue lors de la création du role" }
    }
    revalidatePath('/adminmaster/adminmasterRole, page');
    redirect('/adminmaster/adminmasterRole')
}


export const updateRoleInDb = async (id: number, role:z.infer<typeof roleSchema>) => {
    try {
        await db.role.update({
            where: {
                id: id
            },
            data: role
            }
        )
    }
    catch (error) {
        console.log(`Error at updateRoleInDb: ${error}`)
        return { error: "Une erreur est survenue lors de la modification du role" }
    }
    revalidatePath('/adminmaster/adminmasterRole, page');
    redirect('/adminmaster/adminmasterRole')
}


export const deleteRoleInDb = async (id: number) => {
    try {
        await db.role.delete({
            where: {
                id: id
            }
        })
    }
    catch (error) {
        console.log(`Error at deleteRoleInDb: ${error}`)
        return { error: "Une erreur est survenue lors de la suppression du role" }
    }
    revalidatePath('/adminmaster/adminmasterRole, page');
    redirect('/adminmaster/adminmasterRole')
}