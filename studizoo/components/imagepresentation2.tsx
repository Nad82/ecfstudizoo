import Image from 'next/image'
import React from 'react'
import presentation2 from '../public/presentation2.jpg'
import { AspectRatio } from './ui/aspect-ratio'

export default function Imagepresentation2() {
    return (
        <div className="w-[450px]">
            <AspectRatio ratio={16 / 9} className="bg-muted">
                <Image
                    src={presentation2}
                    alt="Présentation Zoo Arcadia"
                    fill
                    className="rounded-md object-cover"
                />
            </AspectRatio>
        </div>
    )
}