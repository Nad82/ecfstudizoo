
import { Button } from '@/components/ui/button'
import { Undo2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function NotFoundA() {
    return (
        <div className=' bg-green-800 flex min-h-screen w-full flex-col place-items-center justify-center'>
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
            <Link href='/administrateur'>
                <Button><Undo2/>Retour à la page d'accueil</Button>
            </Link>
        </div>
    )
}
