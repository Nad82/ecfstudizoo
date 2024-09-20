
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AvisHome } from '@/components/avis-home'


export default async function Temoignages() {

    return (
        <Card className='bg-green-800 columns-2 '>
            <div className="flex h-full items-center justify-center p-6">
            </div>
            <CardHeader>
                <CardTitle className="text-4xl text-yellow-400 text-center">Avis des visiteurs</CardTitle>
            </CardHeader>
            <CardContent className='justify-center'>
                <p className="text-lg text-white text-left ">
                    Découvrez les avis des visiteurs du zoo Arcadia.
                    <br />
                    Vous aussi, partagez votre expérience !
                    <br />
                </p>
                <AvisHome />
            </CardContent>
        </Card>

    )
}