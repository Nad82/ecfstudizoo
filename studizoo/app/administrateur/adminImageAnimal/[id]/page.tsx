"use server"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import axios from "axios"
import { Undo2 } from "lucide-react"
import Link from "next/link"



export default async function image_animalPage({params}: {params: {id: number}}) {

    const imageAnimal = await axios.get(`http://localhost:3000/api/image_animal/${params.id}`)
        .then((res) => {
            return res.data
        }
    )

    if (!imageAnimal) {
        return <div>Erreur lors de la récupération de l'image</div>
    }

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ">
                <Card x-chunk="adminImageAnimal_detail" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Les détails de l'image {params.id} </CardTitle>
                    </CardHeader>
                    <CardContent className=" text-white">
                        <div>
                            <p className="text-xl">Voici les détails de l'image {params.id}:</p>
                            <br />
                            <ul className="text-lg">
                                <li>Url: {imageAnimal.url}</li>
                                <li>Animal: {imageAnimal.animal?.prenom ?? 'Pas d\'animal'}</li>
                            </ul>
                        </div>
                    </CardContent>
                    <br />
                    <CardFooter>
                        <Link href="/administrateur/adminImageAnimal">
                            <Button> <Undo2 />Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}
