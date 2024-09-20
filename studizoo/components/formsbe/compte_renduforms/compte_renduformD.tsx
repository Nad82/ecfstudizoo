"use client"

import { deleteCompteRenduInDb } from "@/app/actions/compte_rendu"
import { Button } from "@/components/ui/button"


export default function CompteRenduFormD({params} : Readonly<{params: {id:number}}>){

    const handleSubmit = () => {
        deleteCompteRenduInDb(Number(params.id))
}

return (
    <form action={handleSubmit}>
        <Button type="submit">Supprimer</Button>
    </form>
)
}