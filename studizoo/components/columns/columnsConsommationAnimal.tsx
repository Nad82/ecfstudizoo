"use client"

import { ColumnDef} from "@tanstack/react-table"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"

export type ConsommationAnimal ={
    id: number,
    nourriture:string,
    quantite: number,
    heure: Date,
    animal: {
        prenom: string|null
    }|null
}

export const columns: ColumnDef<ConsommationAnimal>[] = [
    {
        header: 'Id',
        accessorKey: 'id'
    },
    {
        header: 'Nourriture',
        accessorKey: 'nourriture'
    },
    {
        header: 'Quantité',
        accessorKey: 'quantite'
    },
    {
        header: 'Heure',
        accessorKey: 'heure'
    },
    {
        header: 'Animal',
        accessorKey: 'animalId',
        cell: ({row}) => {
            const consommationAnimal = row.original
            return (
                <span>{consommationAnimal.animal?.prenom ? ` ${consommationAnimal.animal.prenom}` : 'Pas d\'animal'}</span>
            )
        }
    },
    {
        header: 'Actions',
        accessorKey: 'actions',
        cell: ({row}) => {
            const consommationAnimal = row.original
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
                        <Link href={`/employe/employeConsommationAnimal/${consommationAnimal.id}`}>
                            <DropdownMenuItem>Détails</DropdownMenuItem>
                        </Link>
                        <Link href={`/employe/employeConsommationAnimal/${consommationAnimal.id}/edit`}>
                            <DropdownMenuItem>Modifier</DropdownMenuItem>
                        </Link>
                        <Link href={`/employe/employeConsommationAnimal/${consommationAnimal.id}/delete`}>
                            <DropdownMenuItem>Supprimer</DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]
