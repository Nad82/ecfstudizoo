"use client"

import { Menu, Telescope, Home, Phone, TreePalm, User } from 'lucide-react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from './ui/button'
import Link from 'next/link'


export function MenuRes() {
    return (
        <div className="grid grid-cols-2 gap-2">
                <Sheet>
                    <SheetTrigger>
                        <Menu className='h-6 w-6 md:hidden lg:hidden'/>
                    </SheetTrigger>
                    <SheetContent side='right'className='bg-green-100'>
                        <SheetHeader>
                            <SheetTitle>Menu Zoo Arcadia</SheetTitle>
                            <SheetDescription>Découvrez notre suberbe zoo</SheetDescription>
                        </SheetHeader>
                        <br/>
                            <div className='flex'>
                                <ul className='space-y-2 text-green-800'>
                                    <li>
                                        <Link href='/'>
                                            <Home/> Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/servicess'>
                                        <Telescope/> Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/habitats'>
                                        <TreePalm/> Habitats
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/contact'>
                                            <Phone/>Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <br/>
                        <SheetFooter>
                            <SheetClose>
                                <Link href='/connexion'>
                                    <Button variant="default" size="sm"><User/>Connexion Employe</Button>
                                </Link>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
        </div>
    )
}
