"use client"
import { ColumnDef } from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"


export type Role ={
    id: number,
    nom:string|null,
    user: {
        email: string|null
    }
}

export const columns: ColumnDef<Role>[] = [
    {
        header: 'Id',
        accessorKey: 'id'
    },
    {
        header: "Nom",
        accessorKey: "nom",
    },
    {
        header: 'User',
        accessorKey: 'user',
        cell: ({row}) => {
            const role = row.original
            return (
                <span>
                    <ul>
                        {Array.isArray(role.user) ? (
                            role.user.map((user, index) => (
                                <li key={index}>{user.email}</li>
                            ))
                        ) : (
                            <li>{'Pas d\'utilisateur'}</li>
                        )}
                    </ul>
                </span>
            )
        }
    },
    {
        header: 'Actions',
        accessorKey: 'actions',
        cell: ({row}) => {
            const role = row.original
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
                        <Link href={`/adminmaster/adminmasterRole/${role.id}`}>
                            <DropdownMenuItem>Détails</DropdownMenuItem>
                        </Link>
                        <Link href={`/adminmaster/adminmasterRole/${role.id}/edit`}>
                            <DropdownMenuItem>Modifier</DropdownMenuItem>
                        </Link>
                        <Link href={`/adminmaster/adminmasterRole/${role.id}/delete`}>
                            <DropdownMenuItem>Supprimer</DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]