"use server"

import { getAnimalFromDb } from "@/app/api/animal/route"
import { getCompteRenduFromDb } from "@/app/api/compte_rendu/route"
import { getConsommationAnimalFromDb } from "@/app/api/consommation_animal/route"
import { getHabitatFromDb } from "@/app/api/habitat/route"
import { getImageAnimalFromDb } from "@/app/api/image_animal/route"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Undo2 } from "lucide-react"
import Link from "next/link"


export default async function AnimalPage ({params} : {params: {id:number}}) {

    const animal = await getAnimalFromDb (Number(params.id))

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
                                        {animal.image_animal?.map((image, index) => (
                                            <li key={index}>{image.image}</li>
                                        ))?? 'Pas d\'image'}
                                    </ul>
                                </li>
                                <li>Nom de l'habitat: {animal.habitat?.nom ?? 'Pas d\'habitat'}</li>
                                <li>Compte rendu: 
                                    <ul>
                                        {animal.compte_rendu?.map((compte) => (
                                            <li key={compte.id}>{compte.id}</li>
                                        ))??'Pas de compte rendu'}
                                    </ul>
                                </li>
                                <li>Consommation de l'animal: 
                                    <ul>
                                        {animal.consommation_animal?.map((consommation) => (
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