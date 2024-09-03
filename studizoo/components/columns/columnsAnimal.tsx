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
    habitat:{
        nom: string | null
    }|null,
    image_animal: {
        id: number,
        image: string
    }[],
    compte_rendu: {
        id: number
    }[],
    consommation_animal: {
        id: number
    }[]

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
        accessorKey: "habitatId",
        cell : ({row}) => {
            const animal = row.original
            return (
                <span>{animal.habitat?.nom ?` ${animal.habitat.nom}` : 'Pas d\'habitat'}</span>
            )
        }
    },
    {
        header: "Image",
        accessorKey: "image_animal",
        cell: ({row}) => {
            const animal = row.original
            return (
                <ul>
                    {Array.isArray(animal.image_animal) ? (
                        animal.image_animal.map((image) => (
                            <li key={image.id}>{image.image}</li>
                        ))
                    ) : (
                        'Pas d\'image pour cet animal'
                    )}
                </ul>
            )
        }
    },
    {
        header: "Compte rendu",
        accessorKey: "compte_rendu",
        cell : ({row}) => {
            const animal = row.original
            return (
                <span>
                    <ul>
                        {Array.isArray(animal.compte_rendu) ? (
                            animal.compte_rendu.map((compteRendu) => (
                                <li key={compteRendu.id}>{compteRendu.id}</li>
                            ))
                        ) : (
                            <li>{'Pas de compte rendu pour cet animal'}</li>
                        )}
                    </ul>
                </span>
            )
        }
    },
    {
        header: "Consommation",
        accessorKey: "consommation_animal",
        cell : ({row}) => {
            const animal = row.original
            return (
                <span>
                    <ul>
                        {Array.isArray(animal.consommation_animal) ? (
                            animal.consommation_animal.map((consommation) => (
                                <li key={consommation.id}>{consommation.id}</li>
                            ))
                        ) : (
                            'Pas de consommation pour cet animal'
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