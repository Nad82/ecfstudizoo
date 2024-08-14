"use server"

import { getServicesFromDb } from "@/app/api/servicess/route"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Undo2 } from "lucide-react"
import Link from "next/link"


export default async function ServiceEPage ({params} : {params: {id:number}}){

    const services = await getServicesFromDb (Number(params.id))

    if(!services) {
        return <div>Erreur lors de la récupération du service</div>
    }

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="employeServices_detail" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Consulter le service du zoo Arcadia {params.id}</CardTitle>
                        <br />
                        <br />
                        <CardDescription className="text-lg text-white">
                            L'espace employe vous permet de consulter le service du zoo Arcadia sous l'identifiant {params.id}.
                        </CardDescription>
                    </CardHeader>
                    <br />
                    <CardContent className=" text-white">
                        <ul>
                            <li>Nom: {services.nom}</li>
                            <li>Description: {services.description}</li>
                        </ul>
                    </CardContent>
                    <br />
                    <CardFooter>
                        <Link href="/employe/employeServices">
                            <Button> <Undo2 />Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}