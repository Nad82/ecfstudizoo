"use client"

import { ColumnDef} from "@tanstack/react-table"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"

export type Animal ={
    id: number,
    prenom:string,
    race: string,
    habitat_id: number|null,
    image_animal_id: number|null,
    compte_rendu_id: number|null,
    consommation_animal_id: number|null
}

export const columns: ColumnDef<Animal>[] = [
    {
        header: 'Id',
        accessorKey: 'id'
    },
    {
        header: "Prénom",
        accessorKey: "prenom",
    },
    {
        header: "Race",
        accessorKey: "race",
    },
    {
        header: "Habitat",
        accessorKey: "habitat_id",
    },
    {
        header: "Image",
        accessorKey: "image_animal_id",
        cell: ({row}) => {
            const animal = row.original
            return (
                <img src={animal.image_animal_id ? `Blob url: https://8ctlnkpooioh3ypc.public.blob.vercel-storage.com/image` : '/images/no-image.png'} alt={animal.prenom} className="h-12 w-12 object-cover rounded-full"/>
            )
        }
    },
    {
        header: "Compte rendu",
        accessorKey: "compte_rendu_id",
    },
    {
        header: "Consommation",
        accessorKey: "consommation_animal_id",
    },
    {
        header: 'Actions',
        accessorKey: 'actions',
        cell: ({row}) => {
            const animal = row.original
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
                        <Link href={`/administrateur/adminAnimal/${animal.id}`}>
                            <DropdownMenuItem>Détails</DropdownMenuItem>
                        </Link>
                        <Link href={`/administrateur/adminAnimal/${animal.id}/edit`}>
                            <DropdownMenuItem>Modifier</DropdownMenuItem>
                        </Link>
                        <Link href={`/administrateur/adminAnimal/${animal.id}/delete`}>
                            <DropdownMenuItem>Supprimer</DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]