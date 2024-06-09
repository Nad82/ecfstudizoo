
import React from 'react'
import Imageserviceshome from './imageserviceshome'
import { Button } from './ui/button'
import { Info } from 'lucide-react'
import Link from 'next/link'  
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export function Serviceshome() {
    return (
        <Card className='bg-green-800 columns-2 '>
            <div className="flex h-full items-center justify-center p-6">
                <Imageserviceshome />
            </div>
            <CardHeader>
                <CardTitle className="text-4xl text-yellow-400 text-center">Services</CardTitle>
            </CardHeader>
            <CardContent className='justify-center'>
                <p className="text-lg text-white text-left ">
                    Le zoo Arcadia propose une multitude de services pour rendre votre visite inoubliable.
                    <br />
                    Que vous soyez seul, en famille ou entre amis, vous trouverez forcément votre bonheur parmi nos offres.
                    <br />
                </p>
                <div className="flex h-full items-center justify-center p-6">
                    <Link href='/servicess'>
                        <Button className='item-center'> <Info/>  En savoir plus...</Button>
                    </Link>
                </div>
            </CardContent>
        </Card>

    )
}