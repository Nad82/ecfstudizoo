import React from 'react'
import {TabsList, TabsTrigger } from './ui/tabs'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { ListFilter, PlusCircle } from 'lucide-react'

export default function HeaderMain() {
    return (
            <div className='flex items-center'>
                <TabsList>
                    <TabsTrigger value='tous'>Tous</TabsTrigger>
                    <TabsTrigger value='actif'>Actif</TabsTrigger>
                    <TabsTrigger value='corbeille'>Corbeille</TabsTrigger>
                    <TabsTrigger value='archive' className='hidden sm:flex'>Archive</TabsTrigger>
                </TabsList>
                <div className='ml-auto flex items center gap-2'>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant='outline' size='sm' className='h-7 gap-1'>
                                <ListFilter className='h-3.5 w-3.5'/>
                                <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Filtrer</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end'>
                            <DropdownMenuLabel>Filtrer par</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuCheckboxItem checked>
                                Actif
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>
                                Corbeille
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>
                                Archive
                            </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button size='sm'className='h-7 gap-1'>
                        <PlusCircle className='h-3.5 w-3.5'/>
                        <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Ajouter</span>
                    </Button>
                </div>
            </div>
    )
}
