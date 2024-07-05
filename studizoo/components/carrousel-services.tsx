import React from 'react'
import {Carousel,CarouselNext,CarouselPrevious, CarouselItem, CarouselContent} from "@/components/ui/carousel"
import ImageParc from './image-parc'
import ImageRestaurant from './image-restaurant'
import Imageserviceshome from './imageserviceshome'

const slides = [
    {
        title: "Visite des habitats avec un guide",
        image: <ImageParc />,
    },
    {
        title: "Restaurant",
        image: <ImageRestaurant />,
    },
    {
        title: "Visite en petit train",
        image: <Imageserviceshome />,
    },
]

function CarrouselServices() {
    return (
    <Carousel className="w-full max-w-sm">
        <CarouselContent>
            {slides.map((slide, index) => (
                <CarouselItem key={index}>
                    <div className="text-white text-2xl text-center">{slide.title}</div>
                    <div className="flex justify-center">
                        {slide.image}
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="text-black" />
        <CarouselNext className="text-black" />
    </Carousel>
    )
}

export default CarrouselServices