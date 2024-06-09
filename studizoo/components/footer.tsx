import React from 'react'
import { Separator } from './ui/separator'
import Link from 'next/link'
import { Contact, Phone, KeyRound } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-black shadow-sm p4 border-t">
            <div className='mx-auto w-full'>
                <div className= "columns-3 space-y-1 flex items-center justify-between w-full">
                    <Contact size={24} color='white'/>
                    <p className="text-sm text-white">
                        Adresse:
                        <br/> 
                        Avenue du Zoo
                        <br/> 
                        35000 Rennes
                    </p>
                    <Phone size={24} color='white'/>
                    <p className="text-sm text-white">
                        Numéro de Téléphone:
                        <br/> 
                        02 99 99 99 99
                        <br/>
                    </p>
                    <KeyRound size={24} color='white'/>
                    <p className="text-sm text-white">
                        Jours et heures d'ouverture :
                        <br/> 
                        Ouvert 7 jours sur 7 de 9h à 18h
                        <br/> 
                        Même les jours fériés
                    </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm text-white ">
                <div>
                    <Link href= '/cgu'>
                        Conditions générales d'utilisation
                    </Link>
                </div>
                <Separator orientation="vertical" />
                <div>
                    <Link href= '/mentionslegales'>
                        Mentions légales
                    </Link>
                </div>
                <Separator orientation="vertical" />
                <div>
                    <Link href= '/rgbd'>
                        Politique de confidentialité
                    </Link>
                </div>
            </div>
            <br/>
            <div className='flex items-center justify-between w-full'>
                <div>
                    <p className='text-2xl font-bold text-white'>Zoo Arcadia</p>
                </div>
                <div>
                    <p className='text-white'>© Copyright 2024 Zoo Arcadia</p>
                </div>
                </div>
            </div>
        </footer>  
    )
}
