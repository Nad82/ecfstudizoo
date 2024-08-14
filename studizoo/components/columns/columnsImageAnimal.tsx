"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"


export type ImageAnimal ={
    id: number,
    nom:string|null,
}

export const columns: ColumnDef<ImageAnimal>[] = [
    {
        header: 'Id',
        accessorKey: 'id'
    },
    {
        header: "Nom",
        accessorKey: "nom",
    },
    {
        header: 'Animal',
        accessorKey: 'animal',
    },
    {
        header: 'Actions',
        accessorKey: 'actions',
        cell: ({row}) => {
            const imageAnimal = row.original
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
                        <Link href={`/administrateur/adminImageAnimal/${imageAnimal.id}`}>
                            <DropdownMenuItem>Détails</DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]