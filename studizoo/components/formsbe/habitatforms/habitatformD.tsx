"use client"

import { deleteHabitatInDb } from "@/app/api/habitat/route"
import { Button } from "@/components/ui/button"


export default function HabitatFormD ({params} : {params: {id:number}}){

    const handleSubmit = () => {
        deleteHabitatInDb(Number(params.id))
    }

    return (
        <form action={handleSubmit}>
            <Button type="submit">Supprimer</Button>
        </form>
    )
}