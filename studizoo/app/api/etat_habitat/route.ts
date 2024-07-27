import { db} from "@/lib/db";

export const getAllEtatHabitatFromDb = async () => {
    const etat_habitat = await db.etat_habitat.findMany();
    return etat_habitat
}

export const getEtatHabitatFromDb = async (id: number) => {
    const etat_habitat = await db.etat_habitat.findFirst({
        where: {
            id: id
        }
    })
    return etat_habitat || null
}

export const createEtatHabitatInDb = async (commentaires: string, amelioration:boolean) => {
    const etat_habitat = await db.etat_habitat.create({
        data: {
            commentaires: commentaires,
            amelioration: amelioration
        }
    })
    return etat_habitat
}

export const updateEtatHabitatInDb = async (id: number, commentaires: string, amelioration:boolean) => {
    const etat_habitat = await db.etat_habitat.update({
        where: {
            id: id
        },
        data: {
            commentaires: commentaires,
            amelioration: amelioration
        }
    })
    return etat_habitat
}

export const deleteEtatHabitatInDb = async (id: number) => {
    const etat_habitat = await db.etat_habitat.delete({
        where: {
            id: id
        }
    })
    return etat_habitat
}