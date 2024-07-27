import React from 'react'
import Link  from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { FileCheck, Home, NotebookText, PaintRoller, PanelLeft, Salad, Search, Settings, Telescope, Turtle, User } from 'lucide-react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from './ui/breadcrumb'
import { Input } from './ui/input'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger,DropdownMenuLabel } from './ui/dropdown-menu'
import { Tooltip, TooltipProvider, TooltipTrigger } from './ui/tooltip'


export default function HeaderV() {
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
                            href='/veterinaire'
                            className='group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base'
                            >
                                <Turtle className="h-5 w-5 transition-all group-hover:scale-110"/>
                                <span className="sr-only"> Espace Vétérinaire</span>
                            </Link>
                            <Link
                            href="/veterinaire"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                            >
                                <Home className='h-5 w-5'/>
                                <span className='sr-only'>Home</span>
                            </Link>
                            <Link
                            href="veterinaire/vetoCompteRendus"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                            >
                                <FileCheck className='h-5 w-5'/>
                                <span className='sr-only'>Compte Rendus</span>
                            </Link>
                            <Link
                            href="veterinaire/vetoEtatHabitat"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                            >
                                <PaintRoller className='h-5 w-5'/>
                                <span className='sr-only'>Etat habitat</span>
                            </Link>
                            <Link
                            href="veterinaire/vetoConsommationAnimal"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                            >
                                <Salad className='h-5 w-5'/>
                                <span className='sr-only'>Consommation Nourriture Animaux</span>
                            </Link>
                        </nav>
                        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                    <Link
                                    href="/settings"
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
                    <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href='/veterinaire'>Espace Vétérinaire</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href='/veterinaire/vetoCompteRendus'>Compte Rendus</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href='/veterinaire/vetoEtatHabitat'>Etat Habitat</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href='/veterinaire/vetoConsommationAnimal'>Consommation Nourriture Animaux</Link>
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
                        <DropdownMenuItem>Se déconnecter</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header> 
        </div>   
    )
}