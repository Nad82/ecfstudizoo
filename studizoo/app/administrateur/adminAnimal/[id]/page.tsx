"use server"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Undo2 } from "lucide-react"
import Link from "next/link"
import axios from "axios"


export default async function AnimalPage ({params} : {params: {id:number}}) {

    const animal = await axios.get(`http://localhost:3000/api/animal/${params.id}`)
    .then((res) => {
        return res.data
    })

    if(!animal) {
        return <div>Erreur lors de la récupération de l'animal</div>
    }

    return(
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ">
                <Card x-chunk="adminAnimal_detail" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Les détails de l'animal {params.id} </CardTitle>
                    </CardHeader>
                    <CardContent className=" text-white">
                        <div>
                            <p className="text-xl">Voici les détails de l'animal {params.id}:</p>
                            <br />
                            <ul className="text-lg">
                                <li>Prénom: {animal.prenom}</li>
                                <li>Race: {animal.race}</li>
                                <li>Image: 
                                    <ul>
                                        {animal.image_animal?.map((image: {url: string}, index: number) => (
                                            <li key={index}>{image.url}</li>
                                        ))?? 'Pas d\'image'}
                                    </ul>
                                </li>
                                <li>Nom de l'habitat: {animal.habitat?.nom ?? 'Pas d\'habitat'}</li>
                                <li>Compte rendu: 
                                    <ul>
                                        {animal.compte_rendu?.map((compte : {id: number}) => (
                                            <li key={compte.id}>{compte.id}</li>
                                        ))??'Pas de compte rendu'}
                                    </ul>
                                </li>
                                <li>Consommation de l'animal: 
                                    <ul>
                                        {animal.consommation_animal?.map((consommation: {id: number}) => (
                                            <li key={consommation.id}>{consommation.id}</li>
                                        ))?? 'Pas de consommation'}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                    <br />
                    <CardFooter>
                        <Link href="/administrateur/adminAnimal">
                            <Button> <Undo2 />Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}