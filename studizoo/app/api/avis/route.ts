import { db} from "@/lib/db";

export const getAllAvisFromDb = async () => {
    const avis = await db.avis.findMany();
    return avis
}

export const getAvisFromDb = async (id: number) => {
    const avis = await db.avis.findFirst({
        where: {
            id: id
        }
    })
    return avis || null
}

export const createAvisInDb = async (pseudo:string, commentaires: string, published: boolean) => {
    const avis = await db.avis.create({
        data: {
            pseudo: pseudo,
            commentaires:commentaires,
            published: published
        }
    })
    return avis
}

export const updateAvisInDb = async (id: number, pseudo:string, commentaires: string, published: boolean) => {
    const avis = await db.avis.update({
        where: {
            id: id
        },
        data: {
            pseudo: pseudo,
            commentaires: commentaires,
            published:published
        }
    })
    return avis
}

export const deleteAvisInDb = async (id: number) => {
    const avis = await db.avis.delete({
        where: {
            id: id
        }
    })
    return avis
}


