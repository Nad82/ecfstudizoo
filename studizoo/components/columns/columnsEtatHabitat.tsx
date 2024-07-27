"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"

export type EtatHabitat={
    id:number,
    commentaires:string,
    amelioration: boolean
}

export const columns: ColumnDef<EtatHabitat>[] = [
    {
        header: 'ID',
        accessorKey: 'id',
    },
    {
        header: 'Commentaires',
        accessorKey: 'commentaires',
    },
    {
        header: 'Amélioration',
        accessorKey: 'amelioration',
    },
    {
        header: 'Actions',
        accessorKey: 'actions',
        cell: ({ row }) => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button size="icon" variant="outline">
                            <MoreHorizontal className="h-5 w-5"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <Link href={`/veterinaire/vetoEtatHabitat/${row.original.id}`}>
                                <a>Modifier</a>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href={`/veterinaire/vetoEtatHabitat/${row.original.id}`}>
                                <a>Supprimer</a>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]
