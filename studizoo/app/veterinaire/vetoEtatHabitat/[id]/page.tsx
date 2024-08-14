"use server"

import { getEtatHabitatFromDb } from "@/app/api/etat_habitat/route"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Undo2 } from "lucide-react"
import Link from "next/link"



export default async function EtatHabitatPage({params}: {params:{id: number}}) {

    const etat_habitat = await getEtatHabitatFromDb(Number(params.id))

    if(!etat_habitat) {
        return <div>Erreur lors de la récupération de l'état de l'habitat</div>
    }

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="vetoEtatHabitat_detail" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Les détails de l'état de l'habitat {params.id}</CardTitle>
                    </CardHeader>
                    <CardContent className=" text-white">
                        <div>
                            <p className="text-xl">Voici les détails de l'état de l'habitat {params.id}:</p>
                            <br />
                            <ul className="text-lg">
                                <li>Commentaires: {etat_habitat.commentaires}</li>
                                <li>Amélioration: 
                                    <Switch
                                        checked={etat_habitat.amelioration}
                                        disabled
                                        aria-readonly
                                    />
                                </li>
                            </ul>
                        </div>
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