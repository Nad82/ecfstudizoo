"use server"

import { getHabitatFromDb } from "@/app/api/habitat/route"
import HabitatFormE from "@/components/formsbe/habitatforms/habitatformE"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Undo2 } from "lucide-react"
import Link from "next/link"


export default async function EditHabitatPage ({params} : {params: {id:number}}){

    const habitat = await getHabitatFromDb (Number(params.id))

    if(!habitat) {
        return <div>Erreur lors de la récupération de l'habitat</div>
    }

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="adminHabitat_edit" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Modifier l'habitat du zoo Arcadia {params.id}</CardTitle>
                        <br />
                        <br />
                        <CardDescription className="text-lg text-white">
                            L'espace administrateur vous permet de modifier l'habitat du zoo Arcadia sous l'identifiant {params.id}. Veuillez les modifier via le formulaire ci-dessous:
                        </CardDescription>
                    </CardHeader>
                    <br />
                    <CardContent className=" text-white">
                        <ul>
                            <li>Nom: {habitat.nom}</li>
                            <li>Description: {habitat.description}</li>
                        </ul>
                        <br />
                        <HabitatFormE params={params}/>
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