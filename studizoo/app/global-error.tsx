'use client'
import { Button } from '@/components/ui/button'
import { Undo2 } from 'lucide-react'

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
    <html>
        <body>
            <h2> Rien ne va!!!</h2>
            <Button onClick={() => reset()}><Undo2/>Réessayez encore!!</Button>
        </body>
    </html>
    )
}