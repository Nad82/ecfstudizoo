"use server"

import { getHorairesFromDb } from "@/app/api/horaires/route"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Undo2 } from "lucide-react"
import Link from "next/link"


export default async function HorairesPage ({params} : {params: {id:number}}) {

    const horaires = await getHorairesFromDb (Number(params.id))

    if(!horaires) {
        return <div>Erreur lors de la récupération des horaires</div>
    }

    return(
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ">
                <Card x-chunk="adminHoraires_detail" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Les horaires  de l'Id {params.id} </CardTitle>
                    </CardHeader>
                    <CardContent className=" text-white">
                        <div>
                            <p className="text-xl">Voici les détails des horaires de l'Id {params.id}:</p>
                            <br />
                            <ul className="text-lg">
                                <li>Description: {horaires.description}</li>
                            </ul>
                        </div>
                    </CardContent>
                    <br />
                    <CardFooter>
                        <Link href="/administrateur/adminHoraires">
                            <Button> <Undo2 />Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}