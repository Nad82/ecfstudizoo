import React from 'react'
import Image from 'next/image'
import restaurant from '../public/restaurant.jpg'
import { AspectRatio } from './ui/aspect-ratio'

function ImageRestaurant() {
    return (
        <div className="w-[450px]">
        <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
                src={restaurant}
                alt="Restaurant zoo Arcadia"
                fill
                className="rounded-md object-cover"
            />
        </AspectRatio>
        </div>
    )
}

export default ImageRestaurant