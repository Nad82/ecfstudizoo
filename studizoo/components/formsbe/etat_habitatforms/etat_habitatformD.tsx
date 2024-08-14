"use client"

import { deleteEtatHabitatInDb } from "@/app/api/etat_habitat/route"
import { Button } from "@/components/ui/button"


export default function EtatHabitatFormD({params} : {params: {id:number}}) {
    
        const handleSubmit = () => {
            deleteEtatHabitatInDb(Number(params.id))
        }
    
        return (
            <form action={handleSubmit}>
                <Button type="submit">Supprimer</Button>
            </form>
        )
    }