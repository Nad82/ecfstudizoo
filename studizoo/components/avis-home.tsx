"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

interface Avis  {
    id: number
    pseudo: string
    commentaires: string
}

export function AvisHome() {
    const [aviss, setAviss] = useState<Avis[] | null>(null)
    useEffect(() => {
        async function fetchAviss() {
            let res = await axios.get('http://localhost:3000/api/avis',{
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let data = await res.data
            setAviss(data)
        }
        fetchAviss()
    }
    , [])

    if (!aviss) return <div>Loading...</div>

    return (
        <Card className='bg-green-800 columns-2 '>
           <CardHeader>
           <CardTitle className="text-4xl text-yellow-400 text-center"> Avis des visiteurs</CardTitle>
              </CardHeader>
                <CardContent className='flex justify-center'>
                <div className='flex justify-center'>
                    <Carousel className="w-full max-w-xs">
                        <CarouselContent>
                        {Array.from({ length: 3 }).map((_, index) => (
                        <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                <ul>
                                    {aviss.map((avis) => (
                                        <React.Fragment key={avis.id}>
                                            <li>{avis.pseudo}</li>
                                            <li>{avis.commentaires}</li>
                                        </React.Fragment>
                                                ))}
                                </ul>
                                </CardContent>
                            </Card>
                        </div>
                        </CarouselItem>
                        ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                </CardContent>
        </Card>
    )
}
