"use server"

import { getAnimalFromDb } from "@/app/api/animal/route"
import AnimalformE from "@/components/formsbe/animalforms/animalformE"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Undo2 } from "lucide-react"
import Link from "next/link"


export default async function EditAnimalPage({params} : {params: {id:number}}){ {

    const animal = await getAnimalFromDb (Number(params.id))

    if(!animal) {
        return <div>Erreur lors de la récupération de l'animal</div>
    }

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="adminAnimal_edit" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Modifier l'animal du zoo Arcadia {params.id}</CardTitle>
                        <br />
                        <br />
                        <CardDescription className="text-lg text-white">
                            L'espace administrateur vous permet de modifier l'animal du zoo Arcadia sous l'identifiant {params.id}. Veuillez les modifier via le formulaire ci-dessous:
                        </CardDescription>
                    </CardHeader>
                    <br />
                    <CardContent className=" text-white">
                        <ul>
                            <li>Prenom: {animal.prenom}</li>
                            <li>Race: {animal.race}</li>
                            <li>Image: 
                                <ul>
                                    {animal.image_animal?.map((image, index) => (
                                            <li key={index}>{image.image}</li>
                                    ))?? 'Pas d\'image'}
                                </ul>
                            </li>
                            <li>Nom de l'habitat: {animal.habitat?.nom ?? 'Pas d\'habitat'}</li>
                        </ul>
                        <br />
                        <AnimalformE params={params}/>
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
}}
