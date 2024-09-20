"use server"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import axios from "axios"
import { Undo2 } from "lucide-react"
import Link from "next/link"


export default async function EmployeConsommationAnimalPage({params}: Readonly<{params:{id: number}}>) {

    const consommationAnimal = await axios.get(`http://localhost:3000/api/consommation_animal/${params.id}`)
    .then((res) => {
        return res.data
    })

    if(!consommationAnimal) {
        return <div>Erreur lors de la récupération de la consommation</div>
    }

    return(
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="employeConsommationAnimal_detail" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Les détails de la consommation {params.id} </CardTitle>
                    </CardHeader>
                    <CardContent className=" text-white">
                        <div>
                            <p className="text-xl">Voici les détails de la consommation {params.id}:</p>
                            <br />
                            <ul className="text-lg">
                                <li>Nourriture: {consommationAnimal}.nourriture</li>
                                <li>Quantité de nourriture: {consommationAnimal.quantite}</li>
                                <li>Heure de Passage: {''}
                                    {consommationAnimal.heure
                                        ? consommationAnimal.heure.toLocaleString()
                                        : "Non spécifiée"}
                                </li>
                                <li>Animal: {consommationAnimal.animal?.prenom?? "Non spécifié"}</li>
                            </ul>
                        </div>
                    </CardContent>
                    <br />
                    <CardFooter>
                        <Link href="/employe/employeConsommationAnimal">
                            <Button> <Undo2 />Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}