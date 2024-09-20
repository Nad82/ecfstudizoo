"use client"

import { deleteHorairesInDb } from "@/app/actions/horaires"
import { Button } from '@/components/ui/button'


export default function HorairesformD({params} : Readonly<{params: {id:number}}>) {

    const handleSubmit = () => {
        deleteHorairesInDb(Number(params.id))
    }

    return (
        <form action={handleSubmit}>
            <Button type="submit">Supprimer</Button>
        </form>
    )
}


