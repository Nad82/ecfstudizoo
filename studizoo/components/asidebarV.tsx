import React from 'react'
import Link from 'next/link'
import { FileCheck, Home, PaintRoller, Salad, Settings, Turtle } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

export default function AsidebarV() {
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className= "flex flex-col items-center gap-4 px-2 py-4">
                <Link 
                href='/veterinaire'
                className='group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base' 
                >
                    <Turtle className='h-4 w-4 transition-all group-hover:scale-110'/>
                    <span className= "sr-only">Espace Vétérinaire</span>
                </Link>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                            href="/veterinaire"
                            className='flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
                            >
                                <Home className='h-5 w-5'/>
                                <span className='sr-only'>Espace Vétérinaire</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                            Espace Vétérinaire
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                            href='api/compte_rendu'
                            className='flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8'
                            >
                                <FileCheck className='h-5 w-5'/>
                                <span className='sr-only'>Compte Rendus</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                            Compte Rendus
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                            href='api/etat_habitat'
                            className='flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8'
                            >
                                <PaintRoller className='h-5 w-5'/>
                                <span className='sr-only'>Etat Habitat</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                            Etat Habitat
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                            href='api/consommation_animal'
                            className='flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8'
                            >
                                <Salad className='h-5 w-5'/>
                                <span className='sr-only'>Consommation Animaux</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                            Consommation Animaux
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                            href='/setting'
                            className='flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8'
                            >
                                <Settings className='h-5 w-5'/>
                                <span className='sr-only'>Paramètres</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                            Paramètres
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>    
    )
}
