import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export default function Temoignages({params} : {params: {id: string}}) {
    return (
            <Card className='bg-green-800'>
                <CardHeader>
                    <CardTitle className="text-4xl text-yellow-400 text-center">Avis{params.id}</CardTitle>
                </CardHeader>
                <CardContent className='justify-center'>
                </CardContent>
            </Card>

    )
}
