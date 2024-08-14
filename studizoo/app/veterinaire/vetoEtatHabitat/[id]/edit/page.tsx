"use server"

import { getEtatHabitatFromDb } from "@/app/api/etat_habitat/route"
import EtatHabitatFormE from "@/components/formsbe/etat_habitatforms/etat_habitatformE"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Undo2 } from "lucide-react"
import Link from "next/link"




export default async function EditEtatHabitatPage ({params}: {params:{id: number}}) {

    const etat_habitat = await getEtatHabitatFromDb(Number(params.id))

    if(!etat_habitat) {
        return <div>Erreur lors de la récupération de l'état de l'habitat</div>
    }

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="vetoEtatHabitat_edit" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Modifier l'état de l'habitat du zoo Arcadia {params.id}</CardTitle>
                        <br />
                        <br />
                        <CardDescription className="text-lg text-white">
                            L'espace vétérinaire vous permet de modifier l'état de l'habitat du zoo Arcadia sous l'identifiant {params.id}. Veuillez les modifier via le formulaire ci-dessous:
                        </CardDescription>
                    </CardHeader>
                    <br />
                    <CardContent className=" text-white">
                        <ul>
                            <li>Commentaires: {etat_habitat.commentaires}</li>
                            <li>Amélioration: {etat_habitat.amelioration}</li>
                        </ul>
                        <br />
                        <EtatHabitatFormE params={params}/>
                    </CardContent>
                    <br />
                    <CardFooter>
                        <Link href="/veterinaire/vetoEtatHabitat">
                            <Button> <Undo2 />Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}