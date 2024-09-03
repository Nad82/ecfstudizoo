"use server"

import { getConsommationAnimalFromDb } from "@/app/api/consommation_animal/route"
import ConsommationAnimalformE from "@/components/formsbe/consommation_animalforms/consommation_animalE"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Undo2 } from "lucide-react"
import Link from "next/link"


export default async function EditEmployeConsommationAnimalPage ({params} : {params: {id:number}}) {
    
    const consommation_animal = await getConsommationAnimalFromDb (Number(params.id))
    
        if(!consommation_animal) {
            return <div>Erreur lors de la récupération de la consommation de l'animal</div>
        }
    
        return (
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
                <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <Card x-chunk="employeConsommationAnimal_edit" className="bg-green-800">
                        <CardHeader>
                            <CardTitle className="text-4xl text-yellow-400 text-center">Modifier la consommation de l'animal {params.id}</CardTitle>
                            <br />
                            <br />
                            <CardDescription className="text-lg text-white">
                                L'espace employé vous permet de modifier la consommation de l'animal sous l'identifiant {params.id}. Veuillez les modifier via le formulaire ci-dessous:
                            </CardDescription>
                        </CardHeader>
                        <br />
                        <CardContent className=" text-white">
                            <ul>
                                <li>Nourriture: {consommation_animal.nourriture}</li>
                                <li>Quantité: {consommation_animal.quantite}</li>
                                <li>Heure: {''}
                                    {consommation_animal.heure
                                        ? consommation_animal.heure.toLocaleString()
                                        : "Non spécifiée"}
                                </li>
                                <li>Animal: {consommation_animal.animal?.prenom?? "Non spécifié"}</li>
                            </ul>
                            <br />
                            <ConsommationAnimalformE params={params}/>
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