import React from 'react'
import Link from 'next/link'
import { BarChartBig, Clock3, FileCheck, FileImage, Home, Image, PawPrint, Telescope, TreePalm, Turtle, User } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

export default function AsidebarA() {
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className= "flex flex-col items-center gap-4 px-2 py-4">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                            href="/administrateur"
                            className='flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
                            >
                                <Home className='h-5 w-5'/>
                                <span className='sr-only'>Espace Administrateur</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                            Espace Administrateur
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                            href='administrateur/adminAnimal'
                            className='flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8'
                            >
                                <PawPrint className='h-5 w-5'/>
                                <span className='sr-only'>Animaux</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                            Animaux
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                            href='administrateur/adminCompteRendus'
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
                            href='administrateur/adminUser'
                            className='flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8'
                            >
                                <User className='h-5 w-5'/>
                                <span className='sr-only'>Employés</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                            Employés
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                            href='administrateur/adminHabitats'
                            className='flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8'
                            >
                                <TreePalm className='h-5 w-5'/>
                                <span className='sr-only'>Habitats</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                            Habitats
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                            href='administrateur/adminHoraires'
                            className='flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8'
                            >
                                <Clock3 className='h-5 w-5'/>
                                <span className='sr-only'>Horaires</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                            Horaires
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                            href='administrateur/adminImageAnimal'
                            className='flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8'
                            >
                                <FileImage className='h-5 w-5'/>
                                <span className='sr-only'>Images Animaux</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                            Images Animaux
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                            href='administrateur/adminImageHabitat'
                            className='flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8'
                            >
                                <Image className='h-5 w-5'/>
                                <span className='sr-only'>Images Habitats</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                            Images Habitats
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                            href='administrateur/adminServices'
                            className='flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8'
                            >
                                <Telescope className='h-5 w-5'/>
                                <span className='sr-only'>Services</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                            Services
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                            href='administrateur/adminStatAnimal'
                            className='flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8'
                            >
                                <BarChartBig className='h-5 w-5'/>
                                <span className='sr-only'>Statistiques Animaux</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                            Statistiques Animaux
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>    
    )
}
