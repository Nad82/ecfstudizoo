import { db } from "@/lib/db";
import { userSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllUserFromDb = async () => {
    try {
        const user = await db.user.findMany();
        return user
    } catch (error) {
        console.log(`Error at getAllUserFromDb: ${error}`)
        return null
    }
}
    

export const getUserFromDb = async (id: number) => {
    try {
        const user = await db.user.findUnique({
            where: {
                id: id
            }
        })
        return user
    } catch (error) {
        console.log(`Error at getUserFromDb: ${error}`)
        return null
    }
}

export const createUserInDb = async (user:z.infer<typeof userSchema>) => {
    try {
        await db.user.create({
            data: user
        })
    } catch (error) {
        console.log(`Error at createUserInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la création de l'utilisateur"}
    }
    revalidatePath  ("/administrateur/adminEmploye",'page');
    redirect("/administrateur/adminEmploye")
}

export const updateUserInDb = async (id: number,user:z.infer<typeof userSchema>) => {
    try {
        await db.user.update({
            where: {
                id: id
            },
            data: user
        })
    }
    catch (error) {
        console.log(`Error at updateUserInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la mise à jour de l'utilisateur"}
    }
    revalidatePath  ("/administrateur/adminEmploye",'page');
    redirect("/administrateur/adminEmploye")
}

export const deleteUserInDb = async (id: number) => {
    try{
        await db.user.delete({
            where: {
                id: id
            }
        })
    }
    catch (error){
        console.log(`Error at deleteUserInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la suppression de l'utilisateur"}
    }
    revalidatePath  ("/administrateur/adminEmploye",'page');
    redirect("/administrateur/adminEmploye")
}