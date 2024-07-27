import { getHorairesFromDb } from "@/app/api/horaires/route"
import { handleUpdateHorairesAction } from "@/lib/actions/actions_horaires"
import HorairesFormU from "@/components/formsbe/horairesformU"

export default async function EditHorairesPage({params}: {params:{id: number} }) {
    const horaires = await getHorairesFromDb(Number(params.id))
    const submitFunction = handleUpdateHorairesAction.bind(null, Number(params.id))

    return(
        <HorairesFormU/>
    )
}



