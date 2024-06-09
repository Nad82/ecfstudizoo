import Image from 'next/image'
import React from 'react'
import habitatshome from '../public/habitatshome.jpg'
import { AspectRatio } from './ui/aspect-ratio'

export default function Imagehabitatshome() {
    return (
        <div className="w-[450px]">
            <AspectRatio ratio={16 / 9} className="bg-muted">
                <Image
                    src={habitatshome}
                    alt="Accueil Habitats"
                    fill
                    className="rounded-md object-cover"
                />
            </AspectRatio>
        </div>
    )
}
