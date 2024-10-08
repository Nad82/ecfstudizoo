"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"


export type ImageAnimal ={
    id: number,
    image:string|null,
    animal: {
        prenom:string|null
    }
}

export const columns: ColumnDef<ImageAnimal>[] = [
    {
        header: 'Id',
        accessorKey: 'id'
    },
    {
        header: "Image",
        accessorKey: "nom",
    },
    {
        header: 'Animal',
        accessorKey: 'animalId',
        cell: ({row}) => {
            const imageAnimal = row.original
            return (
                <span>{imageAnimal.animal?.prenom ? ` ${imageAnimal.animal.prenom}` : 'Pas d\'animal'}</span>
            )
        }
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
                        <Link href={`/administrateur/adminImageAnimal/${imageAnimal.id}/edit`}>
                            <DropdownMenuItem>Modifier</DropdownMenuItem>
                        </Link>
                        <Link href={`/administrateur/adminImageAnimal/${imageAnimal.id}/delete`}>
                            <DropdownMenuItem>Supprimer</DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]