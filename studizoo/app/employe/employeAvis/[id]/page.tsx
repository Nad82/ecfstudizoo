"use server"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import axios from "axios";
import { Undo2 } from "lucide-react";
import Link from "next/link";


export default async function AvisPage({params} : Readonly<{params: {id:number}}>) {
    const avis = await axios.get(`http://localhost:3000/api/avis/${params.id}`)
    .then((res) => {
        return res.data
    })

    if(!avis) {
        return <div>Erreur lors de la récupération de l'avis</div>
    }

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="employeAvis_detail"  className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center" >Les Avis des visiteurs du zoo Arcadia</CardTitle>
                        <br/>
                        <CardDescription className="text-lg text-white">
                            L'espace employé vous permet de consulter les avis des visiteurs du zoo Arcadia.
                        </CardDescription>
                    </CardHeader>
                    <br/>
                    <CardContent className="text-white">
                        <div>
                            <p className="text-xl">Voici les détails de l'avis {params.id}:</p>
                            <br/>
                            <ul className="text-lg">
                                <li>Pseudo : {avis.pseudo}</li>
                                <li>Commentaires: {avis.commentaires}</li>
                                <li>Published:
                                        <Switch
                                            checked={avis.published}
                                            disabled
                                            aria-readonly
                                        />
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Link href="/employe/employeAvis">
                            <Button><Undo2/>Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}