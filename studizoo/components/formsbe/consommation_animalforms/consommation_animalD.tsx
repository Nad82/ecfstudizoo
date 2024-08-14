"use client"

import { deleteConsommationAnimalInDb } from "@/app/api/consommation_animal/route"
import { Button } from "@/components/ui/button"


export default function ConsommationAnimalFormD({params} : {params: {id:number}}){

    const handleSubmit = () => {
        deleteConsommationAnimalInDb(Number(params.id))
}

return (
    <form action={handleSubmit}>
        <Button type="submit">Supprimer</Button>
    </form>
)
}