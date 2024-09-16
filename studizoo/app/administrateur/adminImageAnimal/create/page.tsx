
import ImageAnimalformC from "@/components/formsbe/image_animalforms/image_animalAnimalformC";
import ImageAnimalformB from "@/components/formsbe/image_animalforms/image_animalformB";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Undo2 } from "lucide-react";
import Link from "next/link";


export default function CreateImageAnimal() {

    return(
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ">
                <Card x-chunk="adminImageAnimal_create" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Assigner des images aux animaux du zoo Arcadia</CardTitle>
                        <br />
                        <br />
                        <CardDescription className="text-lg text-white">
                            L'espace administrateur vous permet d'assigner des images aux animaux du zoo Arcadia. Veuillez remplir le formulaire ci-dessous.
                        </CardDescription>
                    </CardHeader>
                    <br />
                    <CardContent className=" text-white">
                        <ImageAnimalformB/>
                        <ImageAnimalformC/>
                    </CardContent>
                    <CardFooter>
                        <Link href="/administrateur/adminImageAnimal">
                            <Button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" ><Undo2 className="w-6 h-6"/>Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}
