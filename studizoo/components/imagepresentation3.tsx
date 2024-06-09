import Image from 'next/image'
import React from 'react'
import presentation3 from '../public/presentation3.jpg'
import { AspectRatio } from './ui/aspect-ratio'

export default function Imagepresentation3() {
    return (
        <div className="w-[450px]">
            <AspectRatio ratio={16 / 9} className="bg-muted">
                <Image
                    src={presentation3}
                    alt="Présentation Zoo Arcadia"
                    fill
                    className="rounded-md object-cover"
                />
            </AspectRatio>
        </div>
    )
}