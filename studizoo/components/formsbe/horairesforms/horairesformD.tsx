"use client"

import { deleteHorairesInDb } from '@/app/api/horaires/route'
import { Button } from '@/components/ui/button'


export default function HorairesformD({params} : {params: {id:number}}) {

    const handleSubmit = () => {
        deleteHorairesInDb(Number(params.id))
    }

    return (
        <form action={handleSubmit}>
            <Button type="submit">Supprimer</Button>
        </form>
    )
}


