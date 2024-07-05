import React from 'react'
import Image from 'next/image'
import paonparc from '../public/paonparc.jpg'
import { AspectRatio } from './ui/aspect-ratio'

function ImageParc() {
    return (
        <div className="w-[450px]">
        <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
                src={paonparc}
                alt="Paon dans le parc"
                fill
                className="rounded-md object-cover"
            />
        </AspectRatio>
        </div>
    )
}

export default ImageParc