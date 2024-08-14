"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"


export type ImageHabitat ={
    id: number,
    nom:string|null,
}

export const columns: ColumnDef<ImageHabitat>[] = [
    {
        header: 'Id',
        accessorKey: 'id'
    },
    {
        header: "Nom",
        accessorKey: "nom",
    },
    {
        header: 'Habitat',
        accessorKey: 'habitat',
    },
    {
        header: 'Actions',
        accessorKey: 'actions',
        cell: ({row}) => {
            const imageHabitat = row.original
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
                        <Link href={`/administrateur/adminImageHabitat/${imageHabitat.id}`}>
                            <DropdownMenuItem>Détails</DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]