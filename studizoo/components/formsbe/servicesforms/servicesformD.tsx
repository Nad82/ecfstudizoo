"use client"

import { deleteServicesInDb } from "@/app/api/servicess/route"
import { Button } from "@/components/ui/button"


export default function ServicesformD({params} : {params: {id:number}}) {

    const handleSubmit = () => {
        deleteServicesInDb(Number(params.id))
    }

    return (
        <form action={handleSubmit}>
            <Button type="submit">Supprimer</Button>
        </form>
    )
}