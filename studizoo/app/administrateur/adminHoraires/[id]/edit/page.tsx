"use server"

import HorairesFormU from "@/components/formsbe/horairesforms/horairesformU";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { Undo2 } from "lucide-react";
import Link from "next/link";


export default async function EditHorairesPage({params} : Readonly<{params: {id:number}}>){ {

    const horaires = await axios.get(`http://localhost:3000/api/horaires/${params.id}`)
    .then((res) => {
        return res.data
    })

    if(!horaires) {
        return <div>Erreur lors de la récupération des horaires</div>
    }

    return(
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ">
                <Card x-chunk="adminHoraires_edit" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Modifier les horaires du zoo Arcadia {params.id}</CardTitle>
                        <br />
                        <br />
                        <CardDescription className="text-lg text-white">
                            L'espace administrateur vous permet de modifier les horaires du zoo Arcadia sous l'identifiant {params.id}. Veuillez les modifier via le formulaire ci-dessous:
                        </CardDescription>
                    </CardHeader>
                    <br />
                    <CardContent className=" text-white">
                        <ul>
                            <li>Description: {horaires.description}</li>
                        </ul>
                        <br />
                        <HorairesFormU params={params}/>
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
}}



