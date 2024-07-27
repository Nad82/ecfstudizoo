import { db } from "@/lib/db";

export const getAllServicesFromDb = async () => {
    const services = await db.services.findMany();
    return services
}

export const getServicesFromDb = async (id: number) => {
    const services = await db.services.findFirst({
        where: {
            id: id
        }
    })
    return services || null
}

export const createServicesInDb = async (nom:string, description:string) => {
    const services = await db.services.create({
        data: {
            nom:nom,
            description:description
        }
    })
    return services
}

export const updateServicesInDb = async (id: number, nom:string, description:string) => {
    const services = await db.services.update({
        where: {
            id: id
        },
        data: {
            nom:nom,
            description:description
        }
    })
    return services
}

export const deleteServicesInDb = async (id: number) => {
    const services = await db.services.delete({
        where: {
            id: id
        }
    })
    return services
}

