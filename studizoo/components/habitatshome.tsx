import React from 'react'
import Imagehabitatshome from './imagehabitats'
import { Button } from './ui/button'
import { Info } from 'lucide-react'
import Link from 'next/link'  
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export function Habitatshome() {
    return (
        <Card className='bg-green-800 columns-2 '>
            <CardHeader>
                <CardTitle className="text-4xl text-yellow-400 text-center">Habitats</CardTitle>
            </CardHeader>
            <CardContent className='justify-center'>
                <p className="text-lg text-white text-left ">
                    Le zoo Arcadia est un lieu unique en son genre, où les animaux vivent dans des habitats reconstitués à l'identique de leur environnement naturel.
                    <br />
                    Venez découvrir nos différents habitats et leurs habitants.
                </p>
                <div className="flex h-full items-center justify-center p-6">
                    <Link href='/habitats'>
                        <Button className='item-center'> <Info/>  En savoir plus...</Button>
                    </Link>
                </div>
            </CardContent>
            <div className="flex h-full items-center justify-center p-6">
                <Imagehabitatshome />
            </div>
        </Card>

    )
}