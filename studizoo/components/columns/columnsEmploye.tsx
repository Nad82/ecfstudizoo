"use client"
import {ColumnDef} from "@tanstack/react-table"
import {Button} from "../ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger} from "../ui/dropdown-menu"
import {MoreHorizontal} from "lucide-react"
import Link from "next/link"

export type User={
    id:number,
    email:string,
    password: string|null,
    email_verified: Date|null,
    created_at:Date|null,
    updated_at: Date|null,
    role_id:number
}

export const columns: ColumnDef<User>[] = [
    {
        header: 'Id',
        accessorKey: 'id'
    },
    {
        header: 'Email',
        accessorKey: 'email'
    },
    {
        header: 'Password',
        accessorKey: 'password'
    },
    {
        header: 'Email Verifie le',
        accessorKey: 'email_verified'
    },
    {
        header: 'Créé le',
        accessorKey: 'created_at'
    },
    {
        header: 'Modifié le',
        accessorKey: 'updated_at'
    },
    {
        header: 'Role',
        accessorKey: 'role_id'
    },
    {
        header: 'Actions',
        accessorKey: 'actions',
        cell: ({row}) => {
            const user = row.original
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button aria-haspopup='true' variant='ghost' size='icon'>
                            <MoreHorizontal className="h-4 w-4"/>
                            <span className="sr-only">Menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <Link href={`/administrateur/adminEmploye/${user.id}`}>
                            <DropdownMenuItem>Détails</DropdownMenuItem>
                        </Link>
                        <Link href={`/administrateur/adminEmploye/${user.id}/edit`}>
                            <DropdownMenuItem>Modifier</DropdownMenuItem>
                        </Link>
                        <Link href={`/administrateur/adminEmploye/${user.id}/delete`}>
                            <DropdownMenuItem>Supprimer</DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]
