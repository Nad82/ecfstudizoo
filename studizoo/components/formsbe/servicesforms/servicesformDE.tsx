"use client"

import { deleteServicesInDbE } from "@/app/actions/services"
import { Button } from "@/components/ui/button"


export default function ServicesformDE({params} : Readonly<{params: {id:number}}>) {

    const handleSubmit = () => {
        deleteServicesInDbE(Number(params.id))
    }

    return (
        <form action={handleSubmit}>
            <Button type="submit">Supprimer</Button>
        </form>
    )
}