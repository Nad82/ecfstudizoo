"use server"

import { getCompteRenduFromDb } from "@/app/api/compte_rendu/route"
import CompteRenduFormE from "@/components/formsbe/compte_renduforms/compte_renduformE"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Undo2 } from "lucide-react"
import Link from "next/link"


export default async function EditCompteRendusPage ({params} : {params: {id:number}}) {

    const compte_rendu = await getCompteRenduFromDb (Number(params.id))

    if(!compte_rendu) {
        return <div>Erreur lors de la récupération du compte rendu</div>
    }

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="vetoCompteRendus_edit" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Modifier le compte rendu du zoo Arcadia {params.id}</CardTitle>
                        <br />
                        <br />
                        <CardDescription className="text-lg text-white">
                            L'espace vétérinaire vous permet de modifier le compte rendu du zoo Arcadia sous l'identifiant {params.id}. Veuillez les modifier via le formulaire ci-dessous:
                        </CardDescription>
                    </CardHeader>
                    <br />
                    <CardContent className=" text-white">
                        <ul>
                            <li>Etat: {compte_rendu.etat}</li>
                            <li>Nourriture: {compte_rendu.nourriture}</li>
                            <li>Quantité Nourriture: {compte_rendu.quantite_nourriture}</li>
                            <li>Heure de passage : {compte_rendu.heure_passage.toLocaleString()}</li>
                        </ul>
                        <br />
                        <CompteRenduFormE params={params}/>
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
