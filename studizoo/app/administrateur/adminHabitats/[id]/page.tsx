"use server"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import axios from "axios"
import { Undo2 } from "lucide-react"
import Link from "next/link"



export default async function HabitatPage ({params} : Readonly<{params: {id:number}}>){

    const habitat = await axios.get(`http://localhost:3000/api/habitat/${params.id}`)
    .then((res) => {
        return res.data
    })

    if(!habitat) {
        return <div>Erreur lors de la récupération de l'habitat</div>
    }

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="adminHabitat_detail" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Consulter l'habitat du zoo Arcadia {params.id}</CardTitle>
                        <br />
                        <br />
                        <CardDescription className="text-lg text-white">
                            L'espace administrateur vous permet de consulter l'habitat du zoo Arcadia sous l'identifiant {params.id}.
                        </CardDescription>
                    </CardHeader>
                    <br />
                    <CardContent className=" text-white">
                        <ul>
                            <li>Nom: {habitat.nom??'Nom non disponible'}</li>
                            <li>Description: {habitat.description?? 'Description non disponible'}</li>
                            <li>Animaux:
                                <ul>
                                    {habitat.animal?.map((animal: {prenom: string}, id:number) => (
                                        <li key={id}>{animal.prenom??'Prénom non disponible'}</li>
                                    ))??'Pas d\'animaux dans cet habitat'}
                                </ul> 
                            </li>
                        </ul>
                    </CardContent>
                    <br />
                    <CardFooter>
                        <Link href="/administrateur/adminHabitats">
                            <Button> <Undo2 />Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}