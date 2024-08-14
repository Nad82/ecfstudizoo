import React from 'react'
import { Button } from './ui/button'
import { Undo2 } from 'lucide-react'
import Link from 'next/link'


export default function Footeradm_table() {
    return (
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <footer className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
                <div className="flex h-full items-center justify-end p-6">
                    <Button className='items-center'>
                        <Link href='/administrateur' className='text-center text-xs'> <Undo2 />Retour Espace Administrateur</Link>
                    </Button>    
                </div>
            </footer>
        </div>
    )
}
