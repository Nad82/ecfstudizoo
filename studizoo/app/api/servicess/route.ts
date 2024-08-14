"use server"

import { db } from "@/lib/db";
import { servicesSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllServicesFromDb = async () => {
    try {
        const services = await db.services.findMany();
        return services
    }
    catch (error) {
        console.log(`Error at getAllServicesFromDb: ${error}`)
        return null
    }
}

export const getServicesFromDb = async (id: number) => {
    try {
        const services = await db.services.findFirst({
            where: {
                id: id
            }
        })
        return services
    }
    catch (error) {
        console.log(`Error at getServicesFromDb: ${error}`)
        return null
    }
}

export const createServicesInDb = async (services: z.infer<typeof servicesSchema>) => {
    try {
        await db.services.create({
            data: services
        })
    }
    catch (error) {
        console.log(`Error at createServicesInDb: ${error}`)
        return {error: "Une erreur est survenue lors de la création du services" }
    }
    revalidatePath("/administrateur/adminServices,page")
    redirect("/administrateur/adminServices")
}

export const createServicesInDbE = async (services: z.infer<typeof servicesSchema>) => {
    try {
        await db.services.create({
            data: services
        })
    }
    catch (error) {
        console.log(`Error at createServicesInDb: ${error}`)
        return {error: "Une erreur est survenue lors de la création du services" }
    }
    revalidatePath("/employe/employeServices,page")
    redirect("/employe/employeServices")
}

export const updateServicesInDb = async (id: number, services: z.infer<typeof servicesSchema>) => {
    try {
        await db.services.update({
            where: {
                id: id
            },
            data: services
        })
    }
    catch (error) {
        console.log(`Error at updateServicesInDb: ${error}`)
        return  { error: "Une erreur est survenue lors de la modification du services" }
    }
    revalidatePath("/administrateur/adminServices,page")
    redirect("/administrateur/adminServices")
}

export const updateServicesInDbE = async (id: number, services: z.infer<typeof servicesSchema>) => {
    try {
        await db.services.update({
            where: {
                id: id
            },
            data: services
        })
    }
    catch (error) {
        console.log(`Error at updateServicesInDb: ${error}`)
        return  { error: "Une erreur est survenue lors de la modification du services" }
    }
    revalidatePath("/employe/employeServices,page")
    redirect("/employe/employeServices")
}

export const deleteServicesInDb = async (id: number) => {
    try {
        await db.services.delete({
            where: {
                id: id
            }
        })
    }
    catch (error) {
        console.log(`Error at deleteServicesInDb: ${error}`)
        return { error: "Une erreur est survenue lors de la suppression du services" }
    }
    revalidatePath("/administrateur/adminServices,page")
    redirect("/administrateur/adminServices")
}

export const deleteServicesInDbE = async (id: number) => {
    try {
        await db.services.delete({
            where: {
                id: id
            }
        })
    }
    catch (error) {
        console.log(`Error at deleteServicesInDb: ${error}`)
        return { error: "Une erreur est survenue lors de la suppression du services" }
    }
    revalidatePath("/employe/employeServices,page")
    redirect("/employe/employeServices")
}