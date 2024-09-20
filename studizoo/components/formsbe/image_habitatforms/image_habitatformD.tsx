"use client"

import { deleteImageHabitatInDb } from "@/app/actions/image_habitat"
import {Button} from '@/components/ui/button'


export default function ImageHabitatFormD({params}: Readonly<{params: {id: number}}>) {
    const handleSubmit = () => {
        deleteImageHabitatInDb(Number(params.id))
    }

    return (
        <form action={handleSubmit}>
            <Button type="submit">Supprimer</Button>
        </form>
    )
}