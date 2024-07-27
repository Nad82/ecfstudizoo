import { createHorairesInDb, deleteHorairesInDb, updateHorairesInDb } from "@/app/api/horaires/route"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";
import { z } from "zod";
import { horairesSchema } from "../zod";


export const handleDeleteHorairesAction = async (id: number) => {
    await deleteHorairesInDb(id),
    revalidatePath("administrateur/adminHoraires",'page');
    redirect("administrateur/adminHoraires")
}

export const handleUpdateHorairesAction = async (id: number, horaires:z.infer<typeof horairesSchema>) => {
    await updateHorairesInDb(id,horaires),
    revalidatePath("administrateur/adminHoraires",'page');
    redirect("administrateur/adminHoraires")
}

export const handleCreateHorairesAction = async (horaires:z.infer<typeof horairesSchema>) => {
    await createHorairesInDb(horaires),
    revalidatePath("administrateur/adminHoraires",'page');
    redirect("administrateur/adminHoraires")
}