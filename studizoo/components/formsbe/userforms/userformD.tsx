"use client"

import { deleteUserInDb } from "@/app/api/user/route"
import { Button } from "@/components/ui/button"

export default function UserformD ({params} : {params: {id:number}})
{
    const handleSubmit = () => {
        deleteUserInDb(Number(params.id))
}

return (
    <form action={handleSubmit}>
        <Button type="submit">Supprimer</Button>
    </form>
)
}