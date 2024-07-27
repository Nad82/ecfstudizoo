"use client"

import { ColumnDef} from "@tanstack/react-table"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"

export type AnimalStat ={
    id: string,
    clic: number,
    date_created: Date,
    prenom:string
}

export const columns: ColumnDef<AnimalStat>[] = [
    {
        header: 'Id',
        accessorKey: 'id'
    },
    {
        header: 'Clic',
        accessorKey: 'clic'
    },
    {
        header: 'Date de création',
        accessorKey: 'date_created'
    },
    {
        header: 'Prenom',
        accessorKey: 'prenom'
    },
    {
        header: 'Actions',
        accessorKey: 'actions',
        cell: ({row}) => {
            const animalStat = row.original
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
                        <Link href={`/administrateur/adminAnimalStat/edit/${animalStat.id}`}>
                            <DropdownMenuItem>Modifier</DropdownMenuItem>
                        </Link>
                        <Link href={`/administrateur/adminAnimalStat/delete/${animalStat.id}`}>
                            <DropdownMenuItem>Supprimer</DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]
