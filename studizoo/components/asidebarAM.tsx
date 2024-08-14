import React from 'react'
import Link from 'next/link'
import { FileCheck, Home, UserCheck } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

export default function AsidebarAM() {
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className= "flex flex-col items-center gap-4 px-2 py-4">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                            href="/adminmaster"
                            className='flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
                            >
                                <Home className='h-5 w-5'/>
                                <span className='sr-only'>Espace AdminMaster</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                            Espace AdminMaster
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                            href='adminmaster/adminmasterRole'
                            className='flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8'
                            >
                                <UserCheck className='h-5 w-5'/>
                                <span className='sr-only'>Roles</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                            Rôle
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                            href='adminmaster/adminmasterLogging'
                            className='flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8'
                            >
                                <FileCheck className='h-5 w-5'/>
                                <span className='sr-only'>Logging</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                            Logging
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>    
    )
}
