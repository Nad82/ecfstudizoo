import Image from 'next/image'
import React from 'react'
import serviceshome from '../public/serviceshome.jpg'
import { AspectRatio } from './ui/aspect-ratio'

export default function Imageserviceshome() {
    return (
        <div className="w-[450px]">
            <AspectRatio ratio={16 / 9} className="bg-muted">
                <Image
                    src={serviceshome}
                    alt="Présentation Zoo Arcadia"
                    fill
                    className="rounded-md object-cover"
                />
            </AspectRatio>
        </div>
    )
}
