"use client"

import { deleteRoleInDb } from "@/app/actions/role"
import { Button } from '@/components/ui/button'


export default function RoleformD({params} : Readonly<{params: {id:number}}>) {

    const handleSubmit = () => {
        deleteRoleInDb(Number(params.id))
    }

    return (
        <form action={handleSubmit}>
            <Button type="submit">Supprimer</Button>
        </form>
    )
}