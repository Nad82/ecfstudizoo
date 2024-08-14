"use client"

import { deleteServicesInDbE } from "@/app/api/servicess/route"
import { Button } from "@/components/ui/button"


export default function ServicesformDE({params} : {params: {id:number}}) {

    const handleSubmit = () => {
        deleteServicesInDbE(Number(params.id))
    }

    return (
        <form action={handleSubmit}>
            <Button type="submit">Supprimer</Button>
        </form>
    )
}