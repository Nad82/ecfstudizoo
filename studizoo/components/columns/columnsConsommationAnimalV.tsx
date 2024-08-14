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
    heure: Date
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
        accessorKey: 'animal',
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
                        <Link href={`/veterinaire/vetoConsommationAnimal/${consommationAnimal.id}`}>
                            <DropdownMenuItem>Détails</DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]
