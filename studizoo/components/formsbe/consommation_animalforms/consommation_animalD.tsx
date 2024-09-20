"use client"

import { deleteConsommationAnimalInDb } from "@/app/actions/consommation_animal"
import { Button } from "@/components/ui/button"


export default function ConsommationAnimalFormD({params} : Readonly<{params: {id:number}}>){

    const handleSubmit = () => {
        deleteConsommationAnimalInDb(Number(params.id))
}

return (
    <form action={handleSubmit}>
        <Button type="submit">Supprimer</Button>
    </form>
)
}