"use server"

import { getCompteRenduFromDb } from "@/app/api/compte_rendu/route"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Undo2 } from "lucide-react"
import Link from "next/link"


export default async function VetoCompteRendusPage({params}: {params:{id: number}}) {

    const compteRendu = await getCompteRenduFromDb (Number(params.id))

    if(!compteRendu) {
        return <div>Erreur lors de la récupération du compte-rendu</div>
    }        

    return(
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="vetoCompteRendus_detail" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Les détails du compte-rendu {params.id} </CardTitle>
                    </CardHeader>
                    <CardContent className=" text-white">
                        <div>
                            <p className="text-xl">Voici les détails du compte-rendu {params.id}:</p>
                            <br />
                            <ul className="text-lg">
                                <li>Etat: {compteRendu.etat}</li>
                                <li>Nourriture: {compteRendu.nourriture}</li>
                                <li>Quantité de nourriture: {compteRendu.quantite_nourriture}</li>
                                <li>Heure de Passage:{" "}
                                    {compteRendu.heure_passage
                                        ? compteRendu.heure_passage.toLocaleString()
                                        : "Non spécifiée"}
                                </li>
                                <li>Animal: {compteRendu.animalId}</li>
                            </ul>
                        </div>
                    </CardContent>
                    <br />
                    <CardFooter>
                        <Link href="/veterinaire/vetoCompteRendus">
                            <Button> <Undo2 />Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}