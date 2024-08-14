"use client"

import { deleteRoleInDb } from '@/app/api/role/route'
import { Button } from '@/components/ui/button'


export default function RoleformD({params} : {params: {id:number}}) {

    const handleSubmit = () => {
        deleteRoleInDb(Number(params.id))
    }

    return (
        <form action={handleSubmit}>
            <Button type="submit">Supprimer</Button>
        </form>
    )
}