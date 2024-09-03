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
    image_habitat: {
        image: string|null
    },
    etat_habitat: {
        id: number|null
    },
    animal: {
        prenom:string|null
    }
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
        accessorKey: 'image_habitat',
        cell: ({row}) => {
            const habitat = row.original
            return (
                <>
                    {Array.isArray(habitat.image_habitat) ? (
                        habitat.image_habitat.map((image, index) => (
                            <img key={index} src={`Blob url: ${image.image}`} alt={habitat.nom} className="h-12 w-12 object-cover rounded-full"/>
                        ))
                    ) : (
                        // If there is no image, display a default image
                        <img src='/images/no-image.png' alt={habitat.nom} className="h-12 w-12 object-cover rounded-full"/>
                    )}
                </>
            )
        }
    },
    {
        header: 'Etat',
        accessorKey: 'etat_habitat',
        cell : ({row}) => {
            const habitat = row.original
            return (
                <span>
                    <ul>
                        {Array.isArray(habitat.etat_habitat) ? (
                            habitat.etat_habitat.map((etat, index) => (
                                <li key={index}>{etat.id?? 'Id non disponible'}</li>
                            ))
                        ) : (
                            'Pas d\'état pour cet habitat'
                        )}
                    </ul>
                </span>
            )
        }
    },
    {
        header: 'Animaux',
        accessorKey: 'animal',
        cell : ({row}) => {
            const habitat = row.original;
            return (
                <span>
                    <ul>
                    {Array.isArray(habitat.animal) ? (
                        habitat.animal.map((animal, index) => (
                            <li key={index}>{animal.prenom ?? 'Prénom non disponible'}</li>
                        ))
                    ) : (
                        'Pas d\'animaux dans cet habitat'
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
