"use client"

import { deleteCompteRenduInDb } from "@/app/api/compte_rendu/route"
import { Button } from "@/components/ui/button"


export default function CompteRenduFormD({params} : {params: {id:number}}){

    const handleSubmit = () => {
        deleteCompteRenduInDb(Number(params.id))
}

return (
    <form action={handleSubmit}>
        <Button type="submit">Supprimer</Button>
    </form>
)
}