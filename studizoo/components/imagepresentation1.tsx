import Image from 'next/image'
import React from 'react'
import presentation1 from '../public/presentation1.png'
import { AspectRatio } from './ui/aspect-ratio'

export default function Imagepresentation1() {
    return (
        <div className="w-[450px]">
            <AspectRatio ratio={16 / 9} className="bg-muted">
                <Image
                    src={presentation1}
                    alt="Présentation Zoo Arcadia"
                    fill
                    className="rounded-md object-cover"
                />
            </AspectRatio>
        </div>
    )
}
