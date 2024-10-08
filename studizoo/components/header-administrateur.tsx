"use client"

import React from 'react'
import Link  from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { BarChartBig, Clock3, FileCheck, FileImage, Home, Image, PanelLeft, PawPrint, Search, Settings, Telescope, TreePalm, Turtle, User } from 'lucide-react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from './ui/breadcrumb'
import { Input } from './ui/input'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger,DropdownMenuLabel } from './ui/dropdown-menu'
import { Tooltip, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { SignOut } from './auth/signout-button'


export default function HeaderA() {

    return (
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <header className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline" className="sm:hidden">
                            <PanelLeft className='h-5 w-5'/>
                            <span className='sr-only'>Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side='left' className='sm:max-w-xs'>
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link
                            href="/administrateur"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                            >
                                <Home className='h-5 w-5'/>
                                <span className='sr-only'>Home</span>
                            </Link>
                            <Link
                            href="administrateur/adminAnimal"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                            >
                                <PawPrint className='h-5 w-5'/>
                                <span className='sr-only'>Animaux</span>
                            </Link>
                            <Link
                            href="administrateur/adminCompteRendus"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                            >
                                <FileCheck className='h-5 w-5'/>
                                <span className='sr-only'>Compte Rendus</span>
                            </Link>
                            <Link
                            href="administrateur/adminUser"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                            >
                                <User className='h-5 w-5'/>
                                <span className='sr-only'>Employés</span>
                            </Link>
                            <Link
                            href="administrateur/adminHabitats"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                            >
                                <TreePalm className='h-5 w-5'/>
                                <span className='sr-only'>Habitats</span>
                            </Link>
                            <Link
                            href="administrateur/adminHoraires"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                            >
                                <Clock3 className='h-5 w-5'/>
                                <span className='sr-only'>Horaires</span>
                            </Link>
                            <Link
                            href="administrateur/adminImageAnimal"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                            >
                                <FileImage className='h-5 w-5'/>
                                <span className='sr-only'>Images Animaux</span>
                            </Link>
                            <Link
                            href="administrateur/adminImageHabitat"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                            >
                                <Image className='h-5 w-5'/>
                                <span className='sr-only'>Images Habitats</span>
                            </Link>
                            <Link
                            href="administrateur/adminServices"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                            >
                                <Telescope className='h-5 w-5'/>
                                <span className='sr-only'>Services</span>
                            </Link>
                            <Link
                            href="administrateur/adminStatAnimal"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                            >
                                <BarChartBig className='h-5 w-5'/>
                                <span className='sr-only'>Statistiques Animaux</span>
                            </Link>
                        </nav>
                        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                    <Link
                                    href="administrateur/settings"
                                    className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                                    >
                                        <Settings className='h-5 w-5'/>
                                        <span className='sr-only'>Paramètres</span>
                                    </Link>
                                    </TooltipTrigger>
                                </Tooltip>
                            </TooltipProvider>
                        </nav>
                    </SheetContent>
                </Sheet>
                <Breadcrumb className='hidden md:flex'>
                    <BreadcrumbList className='text-white'>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href='/administrateur'>Espace Administrateur</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href='administrateur/adminAnimal'>Animaux</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href='administrateur/adminCompteRendus'>Compte Rendus</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href='administrateur/adminUser'>Employés</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href='administrateur/adminHabitats'>Habitats</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href='administrateur/adminHoraires'>Horaires</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href='administrateur/adminImageAnimal'>Images Animaux</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href='administrateur/adminImageHabitat'>Images Habitats</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href='administrateur/adminServices'>Services</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href='administrateur/adminStatAnimal'>Statistiques Animaux</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="relative ml-auto flex-1 md:grow-0">
                    <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground'/>
                    <Input
                    type='search'
                    placeholder='Rechercher...'
                    className='w-full rounded-leg bg-background pl-8 md:w-[200px] lg:w-[320px]'
                    />
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className='overflow-hidden rounded-full'
                        >
                            <User className='h-8 w-8'/>
                            <span className='sr-only'>Profil</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>Paramètres</DropdownMenuItem>
                        <DropdownMenuItem>
                            <SignOut/>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header> 
        </div>   
    )
}
