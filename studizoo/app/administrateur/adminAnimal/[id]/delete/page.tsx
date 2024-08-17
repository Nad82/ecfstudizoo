"use server"

import AnimalformD from "@/components/formsbe/animalforms/animalformD"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Undo2 } from "lucide-react"
import Link from "next/link"


export default async function DeleteAnimalPage ({params}: {params:{id: number}}) {
    
    return(
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="adminAnimal_delete" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Supprimer l'animal du zoo Arcadia {params.id}</CardTitle>
                        <br />
                        <br />
                        <CardDescription className="text-lg text-white">
                            L'espace administrateur vous permet de supprimer l'animal du zoo Arcadia sous l'identifiant {params.id}.
                        </CardDescription>
                    </CardHeader>
                    <br />
                    <br />
                    <CardContent className=" text-white text-center">
                        <h1>Êtes-vous sûr de vouloir supprimer l'animal du zoo Arcadia {params.id} ?</h1>
                        <p>Attention, cette action est irréversible.</p>
                        <br />
                        <p>Si vous êtes sûr de vouloir supprimer l'animal, cliquez sur le bouton ci-dessous:</p>
                        <br />
                        <AnimalformD params={params}/>
                    </CardContent>
                        <br />
                        <br />
                        <br />
                        <CardFooter className=" text-white">
                            <p>Si vous souhaitez annuler la suppression de l'animal, cliquez sur le bouton Retour:</p>
                            <Link href="/administrateur/adminAnimal">
                                <Button> <Undo2 />Retour</Button>
                            </Link>
                        </CardFooter>
                    </Card>
            </main>
        </div>
        )
}