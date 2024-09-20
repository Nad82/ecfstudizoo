"use client"

import { deleteEtatHabitatInDb } from "@/app/actions/etat_habitat"
import { Button } from "@/components/ui/button"


export default function EtatHabitatFormD({params} : Readonly<{params: {id:number}}>) {
    
        const handleSubmit = () => {
            deleteEtatHabitatInDb(Number(params.id))
        }
    
        return (
            <form action={handleSubmit}>
                <Button type="submit">Supprimer</Button>
            </form>
        )
    }