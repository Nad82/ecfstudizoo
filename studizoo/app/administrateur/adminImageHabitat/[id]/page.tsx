"use server"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Undo2 } from "lucide-react"
import Link from "next/link"
import axios from "axios"


export default async function image_habitatPage({params}: {params: {id: number}}) {

    const imageHabitat = await axios.get(`http://localhost:3000/api/image_habitat/${params.id}`)
        .then((res) => {
            return res.data
        }
    )

    if (!imageHabitat) {
        return <div>Erreur lors de la récupération de l'image</div>
    }

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ">
                <Card x-chunk="adminImageHabitat_detail" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Les détails de l'image {params.id} </CardTitle>
                    </CardHeader>
                    <CardContent className=" text-white">
                        <div>
                            <p className="text-xl">Voici les détails de l'image {params.id}:</p>
                            <br />
                            <ul className="text-lg">
                                <li>Url: {imageHabitat.url}</li>
                                <li>Habitat: {imageHabitat.habitat?.nom ?? 'Pas d\'habitat'}</li>
                            </ul>
                        </div>
                    </CardContent>
                    <br />
                    <CardFooter>
                        <Link href="/administrateur/adminImageHabitat">
                            <Button> <Undo2 />Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}
