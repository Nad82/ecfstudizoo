"use client"

import { deleteServicesInDb } from "@/app/actions/services"
import { Button } from "@/components/ui/button"


export default function ServicesformD({params} : Readonly<{params: {id:number}}>) {

    const handleSubmit = () => {
        deleteServicesInDb(Number(params.id))
    }

    return (
        <form action={handleSubmit}>
            <Button type="submit">Supprimer</Button>
        </form>
    )
}