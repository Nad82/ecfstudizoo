"use client"

import {ColumnDef} from "@tanstack/react-table"
import {Button} from "../ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger} from "../ui/dropdown-menu"
import {MoreHorizontal} from "lucide-react"
import Link from "next/link"

export type Horaires={
    id: number,
    description: string

}
export const columns: ColumnDef<Horaires>[] = [
    {
        header: 'Id',
        accessorKey: 'id'
    },
    {
        header: 'Description',
        accessorKey: 'description'
    },
    {
        header: 'Actions',
        accessorKey: 'actions',
        cell: ({row}) => {
            const horaires = row.original
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
                        <DropdownMenuItem>Détails</DropdownMenuItem>
                        <Link href={`/administrateur/adminHoraires/edit/${horaires.id}`}>
                            <DropdownMenuItem>Modifier</DropdownMenuItem>
                        </Link>
                        <Link href={`/administrateur/adminHoraires/delete/${horaires.id}`}>
                            <DropdownMenuItem>Supprimer</DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]