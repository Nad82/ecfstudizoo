import EtatHabitatFormC from "@/components/formsbe/etat_habitatforms/etat_habitatformC";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Undo2 } from "lucide-react";
import Link from "next/link";


export default function CreateEtatHabitatPage() {

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ">
                <Card x-chunk="vetoEtatHabitat_create" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Création des états d'habitat du zoo Arcadia</CardTitle>
                        <br />
                        <br />
                        <CardDescription className="text-lg text-white">
                            L'espace vétérinaire vous permet de créer les états d'habitat des animaux du zoo Arcadia. Veuillez remplir le formulaire ci-dessous.
                        </CardDescription>
                    </CardHeader>
                    <br />
                    <CardContent className=" text-white">
                        <EtatHabitatFormC />
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