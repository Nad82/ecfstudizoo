"use client"

import {deleteImageAnimalInDb} from '@/app/actions/image_animal'
import {Button} from '@/components/ui/button'



export default function ImageAnimalFormD({params}: Readonly<{params: {id: number}}>) {
    const handleSubmit = () => {
        deleteImageAnimalInDb(Number(params.id))
    }

    return (
        <form action={handleSubmit}>
            <Button type="submit">Supprimer</Button>
        </form>
    )
}

