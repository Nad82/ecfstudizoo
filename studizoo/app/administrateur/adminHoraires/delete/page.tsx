import { deleteHorairesInDb } from "@/app/api/horaires/route"
import { Button } from "@/components/ui/button"
import { handleDeleteHorairesAction } from "@/lib/actions/actions_horaires"
import Link from "next/link"

export default async function DeleteHorairesPage({params}: {params:{id: number} }) {
    const horaires = await deleteHorairesInDb(Number(params.id))
    const bindeHandleDeleteHorairesAction = handleDeleteHorairesAction.bind(null,Number(params.id))

    return(
        <div className="flex flex-col items-center mt-6">
            <h1>Etes-vous sûr de vouloir supprimer les horaires suivants</h1>
            <div className="flex items-center justify-evenly gap-4 mt-6">
                <div>
                    <Link href="/administrateur/adminHoraires/delete">
                        <Button>Annuler</Button>
                    </Link>
                </div>
                <div>
                    <form action={bindeHandleDeleteHorairesAction}>
                        <Button type="submit">Supprimer</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}