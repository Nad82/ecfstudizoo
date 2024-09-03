"use client"

import { ColumnDef} from "@tanstack/react-table"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"

export type CompteRendus ={
    id:number,
    etat: string,
    nourriture: string,
    quantite_nourriture: number,
    heure_passage: Date
    animal: {
        prenom: string|null
    }
}

export const columns: ColumnDef<CompteRendus>[] = [
    {
        header: 'Id',
        accessorKey: 'id'
    },
    {
        header: 'Etat',
        accessorKey: 'etat'
    },
    {
        header: 'Nourriture',
        accessorKey: 'nourriture'
    },
    {
        header: 'Quantité de nourriture',
        accessorKey: 'quantite_nourriture'
    },
    {
        header: 'Heure de passage',
        accessorKey: 'heure_passage'
    },
    {
        header: 'Animal',
        accessorKey: 'animalId',
        cell: ({row}) => {
            const compteRendu = row.original
            return (
                <span>{compteRendu.animal?.prenom ? `${compteRendu.animal.prenom}` : 'Pas d\'animal'}</span>
            )
        }
    },
    {
        header: 'Actions',
        accessorKey: 'actions',
        cell: ({row}) => {
            const compteRendu = row.original
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
                        <Link href={`/administrateur/adminCompteRendus/${compteRendu.id}`}>
                            <DropdownMenuItem>Détails</DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]