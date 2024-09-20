"use client"

import { deleteAnimalInDb } from '@/app/actions/animal';
import { deleteImageAnimalInDb } from '@/app/actions/image_animal';
import { Button } from '@/components/ui/button'
import React from 'react'

export default function AnimalformD({params} : Readonly<{params: {id:number}}>) {
    
    const handleSubmit = () => {
        deleteAnimalInDb(Number(params.id));
        deleteImageAnimalInDb(Number(params.id));
    }

    return (
        <form action={handleSubmit}>
            <Button type="submit">Supprimer</Button>
        </form>
    )
}
