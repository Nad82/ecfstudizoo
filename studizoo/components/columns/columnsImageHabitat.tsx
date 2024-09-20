"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"


export type ImageHabitat ={
    id: number,
    image:string|null,
    habitat: {
        nom: string|null
    }
}

export const columns: ColumnDef<ImageHabitat>[] = [
    {
        header: 'Id',
        accessorKey: 'id'
    },
    {
        header: "Image",
        accessorKey: "nom",
    },
    {
        header: 'Habitat',
        accessorKey: 'habitatId',
        cell: ({row}) => {
            const imageHabitat = row.original
            return (
                <span>{imageHabitat.habitat?.nom ? `Habitat ${imageHabitat.habitat.nom}` : 'Pas d\'habitat'}</span>
            )
        }
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
                        <Link href={`/administrateur/adminImageHabitat/${imageHabitat.id}/edit`}>
                            <DropdownMenuItem>Modifier</DropdownMenuItem>
                        </Link>
                        <Link href={`/administrateur/adminImageHabitat/${imageHabitat.id}/delete`}>
                            <DropdownMenuItem>Supprimer</DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]