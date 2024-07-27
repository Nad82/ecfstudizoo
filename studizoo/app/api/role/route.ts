import { db } from "@/lib/db";

export const getAllRoleFromDb = async () => {
    const role = await db.role.findMany();
    return role
}

export const getRoleFromDb = async (id: number) => {
    const role = await db.role.findFirst({
        where: {
            id: id
        }
    })
    return role || null
}

export const createRoleInDb = async (nom:string) => {
    const role = await db.role.create({
        data: {
            nom:nom
        }
    })
    return role
}

export const updateRoleInDb = async (id: number, nom:string) => {
    const role = await db.role.update({
        where: {
            id: id
        },
        data: {
            nom:nom
        }
    })
    return role
}

export const deleteRoleInDb = async (id: number) => {
    const role = await db.role.delete({
        where: {
            id: id
        }
    })
    return role
}