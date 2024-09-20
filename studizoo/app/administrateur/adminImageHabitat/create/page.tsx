
import Link from 'next/link';;
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Undo2 } from 'lucide-react';
import ImageHabitatformC from '@/components/formsbe/image_habitatforms/image_habitatformC';
import ImageHabitatformB from '@/components/formsbe/image_habitatforms/image_habitatformB';


export default function CreateImageHabitat() {

    return(

    <div className ="flex min-h-screen w-full flex-col bg-muted/40">
        <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ">
            <Card x-chunk="adminImageHabitat_create" className="bg-green-800">
                <CardHeader>
                    <CardTitle className="text-4xl text-yellow-400 text-center">Assigner des images aux habitats du zoo Arcadia</CardTitle>
                    <br />
                    <br />
                    <CardDescription className="text-lg text-white">
                        L'espace administrateur vous permet d'assigner des images aux habitats du zoo Arcadia. Veuillez remplir le formulaire ci-dessous.
                    </CardDescription>
                </CardHeader>
                <br />
                <CardContent className=" text-white">
                    <ImageHabitatformB/>
                    <ImageHabitatformC/>
                </CardContent>
                <CardFooter>
                    <Link href="/administrateur/adminImageHabitat">
                        <Button ><Undo2 className="w-6 h-6"/>Retour</Button>
                    </Link>
                </CardFooter>
            </Card>
        </main>
    </div>
    )
}