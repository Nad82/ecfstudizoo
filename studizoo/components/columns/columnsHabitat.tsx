"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"


export type Habitat ={
    id:number,
    nom:string,
    description: string,
    image_habitat_id: number|null,
    etat_habitat_id: number|null
}

export const columns: ColumnDef<Habitat>[] = [
    {
        header: 'Id',
        accessorKey: 'id'
    },
    {
        header: 'Nom',
        accessorKey: 'nom'
    },
    {
        header: 'Description',
        accessorKey: 'description'
    },
    {
        header: 'Image',
        accessorKey: 'image_habitat_id',
        cell: ({row}) => {
            const habitat = row.original
            return (
                <img src={habitat.image_habitat_id ? `http://localhost:3000/api/habitat/${habitat.image_habitat_id}/image` : '/images/no-image.png'} alt={habitat.nom} className="h-12 w-12 object-cover rounded-full"/>
            )
        }
    },
    {
        header: 'Etat',
        accessorKey: 'etat_habitat_id'
    },
    {
        header: 'Actions',
        accessorKey: 'actions',
        cell: ({row}) => {
            const habitat = row.original
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
                        <Link href={`/administrateur/adminHabitats/${habitat.id}`}>
                            <DropdownMenuItem>Détails</DropdownMenuItem>
                        </Link>
                        <Link href={`/administrateur/adminHabitats/${habitat.id}/edit`}>
                            <DropdownMenuItem>Modifier</DropdownMenuItem>
                        </Link>
                        <Link href={`/administrateur/adminHabitats/${habitat.id}/delete`}>
                            <DropdownMenuItem>Supprimer</DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]
