"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { Switch } from "../ui/switch"

export type EtatHabitat={
    id:number,
    commentaires:string,
    amelioration: boolean,
    habitat: {
        nom:string|null
    }
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
        cell: ({row}) => {
            const etat_habitat = row.original;

            return (
                <form>
                    <Switch 
                        id="amelioration"
                        checked={etat_habitat.amelioration}
                        disabled
                        aria-readonly
                    />
                </form>
            )
        }
    },
    {
        header: 'Habitat',
        accessorKey: 'habitatId',
        cell : ({row}) => {
            const etatHabitat = row.original
            return (
                <span>{etatHabitat.habitat?.nom ? `Habitat ${etatHabitat.habitat.nom}` : 'Pas d\'habitat'}</span>
            )
        }
    },
    {
        header: 'Actions',
        accessorKey: 'actions',
        cell: ({row}) => {
            const etatHabitat = row.original
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
                        <Link href={`/veterinaire/vetoEtatHabitat/${etatHabitat.id}`}>
                            <DropdownMenuItem>Détails</DropdownMenuItem>
                        </Link>
                        <Link href={`/veterinaire/vetoEtatHabitat/${etatHabitat.id}/edit`}>
                            <DropdownMenuItem>Modifier</DropdownMenuItem>
                        </Link>
                        <Link href={`/veterinaire/vetoEtatHabitat/${etatHabitat.id}/delete`}>
                            <DropdownMenuItem>Supprimer</DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }

]
