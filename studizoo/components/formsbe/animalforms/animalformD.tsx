"use client"

import { deleteAnimalInDb } from '@/app/api/animal/route'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function AnimalformD({params} : {params: {id:number}}) {
    
    const handleSubmit = () => {
        deleteAnimalInDb(Number(params.id))
    }

    return (
        <form action={handleSubmit}>
            <Button type="submit">Supprimer</Button>
        </form>
    )
}
