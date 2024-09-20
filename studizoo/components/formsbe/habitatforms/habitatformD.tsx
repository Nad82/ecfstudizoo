"use client"

import { deleteHabitatInDb } from "@/app/actions/habitat"
import { Button } from "@/components/ui/button"


export default function HabitatFormD ({params} : Readonly<{params: {id:number}}>){

    const handleSubmit = () => {
        deleteHabitatInDb(Number(params.id))
    }

    return (
        <form action={handleSubmit}>
            <Button type="submit">Supprimer</Button>
        </form>
    )
}