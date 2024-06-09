import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from './ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Imagepresentation1 from './imagepresentation1'
import Imagepresentation2 from './imagepresentation2'
import Imagepresentation3 from './imagepresentation3'

export default function Aproposhome() {
    return (
    <Card className='bg-green-800'>
        <CardHeader>
            <CardTitle className="text-4xl text-yellow-400 text-center">Presentation du Zoo Arcadia</CardTitle>
        </CardHeader>
        <Carousel className="w-full">
            <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className='p-1 box-border md:box-content'>
                        <Card>
                            <CardContent className='flex aspect-square items-center justify-center p-6'>
                                <Imagepresentation1 />
                            </CardContent>
                        </Card>
                    </div>             
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className='p-1 box-border md:box-content'>
                        <Card>
                            <CardContent className='flex aspect-square items-center justify-center p-6'>
                                <Imagepresentation2/>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className='p-1 box-border md:box-content'>
                        <Card>
                            <CardContent className='flex aspect-square items-center justify-center p-6'>
                                <Imagepresentation3 />
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        <CardContent>
        <p className="text-lg text-white text-center">
                Le zoo Arcadia est situé en France, en Bretagne, près de la forêt de Brocéliande.
                <br />
                Il a été créé en 1960 par un passionné de la nature, Jean-Pierre Leclerc.
                <br />
                Depuis, le zoo n'a cessé de s'agrandir et de se moderniser pour offrir aux visiteurs une expérience unique.
                Il possède à ce jour tout un panel d'animaux répartis dans différents habitats: la savane, la jungle et les marais.
                <br />
                Les membres du personnel sont tous passionnés par la nature et la cause animale. Ils font extrêment attentions au bien-être, à l'environnement et à la santé de chaque animal.
                <br />
                Le zoo est engagé dans la cause environnementale et de ce fait est entièrement autosuffisant en énergie.
                Le zoo est à ce jour dirigé par José, un fervent défenseur des causes environnementales et animales.
            </p>
        </CardContent>
    </Card>
    )
}
