import { db } from "@/lib/db";

export const getAllUserFromDb = async () => {
    const user = await db.user.findMany();
    return user
}

export const getUserFromDb = async (id: number) => {
    const user = await db.user.findFirst({
        where: {
            id: id
        }
    })
    return user || null
}

export const createUserInDb = async (email:string, password:string, email_verified: Date, created_at: Date, updated_at: Date, role_id: number) => {
    const user = await db.user.create({
        data: {
            email:email,
            password:password,
            email_verified:email_verified,
            created_at:created_at,
            updated_at:updated_at,
            role_id:role_id
        }
    })
    return user
}

export const updateUserInDb = async (id: number, email:string, password:string, email_verified: Date, created_at: Date, updated_at: Date, role_id: number) => {
    const user = await db.user.update({
        where: {
            id: id
        },
        data: {
            email:email,
            password:password,
            email_verified:email_verified,
            created_at:created_at,
            updated_at:updated_at,
            role_id:role_id
        }
    })
    return user
}

export const deleteUserInDb = async (id: number) => {
    const user = await db.user.delete({
        where: {
            id: id
        }
    })
    return user
}