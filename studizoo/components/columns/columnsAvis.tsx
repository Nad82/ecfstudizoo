"use client"

import { ColumnDef} from "@tanstack/react-table"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { Switch } from "../ui/switch"
import { avisSchema } from "@/lib/zod"
import { z } from "zod"
import { updateAvisInDb } from "@/app/actions/avis"

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
        accessorKey: 'published',
        cell: ({row}) => {
            const avis = row.original;

            const handleSwitchChange = (checked:boolean) => {
                const updateAvis = {
                    ...avis,
                    published: checked
                };
                handleSubmit(updateAvis);
            };

            const handleSubmit = (data:z.infer<typeof avisSchema> ) => {
                updateAvisInDb(avis.id, data)
            }
            return (
                <form>
                    <Switch 
                        id="published"
                        onCheckedChange={handleSwitchChange}
                        checked={avis.published}
                    />
                </form>
            )
        }
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
                        <Link href={`/employe/employeAvis/${avis.id}`}>
                            <DropdownMenuItem>Détails</DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]