"use client"

import { ColumnDef} from "@tanstack/react-table"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"

export type Avis ={
    id: number,
    pseudo:string,
    commentaires: string,
    published:boolean
}

export const columns: ColumnDef<Avis>[] = [
    {
        header: 'Id',
        accessorKey: 'id'
    },
    {
        header: 'Pseudo',
        accessorKey: 'pseudo'
    },
    {
        header: 'Commentaires',
        accessorKey: 'commentaires'
    },
    {
        header: 'Published',
        accessorKey: 'published'
    },
    {
        header: 'Actions',
        accessorKey: 'actions',
        cell: ({row}) => {
            const avis = row.original
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
                        <Link href={`/administrateur/adminAvis/edit/${avis.id}`}>
                            <DropdownMenuItem>Modifier</DropdownMenuItem>
                        </Link>
                        <Link href={`/administrateur/adminAvis/delete/${avis.id}`}>
                            <DropdownMenuItem>Supprimer</DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]