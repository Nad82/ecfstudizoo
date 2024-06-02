import React from 'react'
import { Navigation } from './navigationmenu'
import Link  from 'next/link'
import { MenuRes } from './menu'



export default function Header() {
    return (
        <header className="bg-white shadow-sm p4 border-b border-green-800">
            <div className='mx-auto w-full'>
                <div className='flex items-center justify-between w-full'>
                    <div>
                        <Link href='/'>
                            <h1 className='text-4xl font-bold text-green-600'>Zoo Arcadia</h1>
                        </Link>
                    </div>
                    <div className='hidden md:block'>
                        <Navigation/>
                    </div>
                    <div className='block md:hidden'>
                        <MenuRes />
                    </div>
                </div>
            </div>    
        </header>    
    )
}
