'use client'
import { Button } from '@/components/ui/button'
import { Undo2 } from 'lucide-react'
import Link from 'next/link'

import { useRouter } from 'next/navigation'
import React from 'react'

export default function NotFound() {
    
    return (
        <div className='global bg-green-800 flex min-h-screen w-full flex-col place-items-center justify-center'>
            <div>   
                <div>
                    <h1 className='text-4xl text-center text-yellow-400'>404 - La page que vous cherchez n'existe pas.</h1>
                </div>
                <br/>
                <div>
                    <p className='text-xl text-center text-yellow-400'>
                        Veuillez retourner à la page d'accueil en cliquant sur le lien ci-dessous.
                    </p>
                </div>
            </div>
            <br/>
            <div>
                <Link href='/'>
                    <Button > <Undo2/>Retour à la page d'accueil</Button>
                </Link>
            </div>
        </div>
    )
}
