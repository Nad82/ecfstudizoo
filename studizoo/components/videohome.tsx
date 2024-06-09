import React from 'react'
import { Card } from './ui/card'

export default function Videohome() {
    return (
        <Card className='bg-green-800'>
            <video className="w-full h-full" autoPlay loop muted>
                <source src="/accueil.mp4" type="video/mp4" />
                <title>Bienvenue sur le site du zoo Arcadia</title>
            </video>
        </Card>
    )
}
