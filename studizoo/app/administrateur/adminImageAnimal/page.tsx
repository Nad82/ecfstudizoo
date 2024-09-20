
import { columns } from "@/components/columns/columnsImageAnimal";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Undo2 } from "lucide-react";
import axios from "axios";


export default async function adminImageAnimal() {
    const imageAnimal = await axios.get("http://localhost:3000/api/image_animal")
    .then((res) => {
        return res.data
    })

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="adminImageAnimal" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Les images des animaux</CardTitle>
                        <CardDescription className="text-lg text-white">
                            L'espace administrateur vous permet de gérer les images des animaux du zoo Arcadia: Créer, modifier ou supprimer les images.
                        </CardDescription>
                        <Link href="/administrateur/adminImageAnimal/create">
                            <Button> <Plus />Créer une image</Button>
                        </Link>
                    </CardHeader>
                    <CardContent className=" text-white">
                        <DataTable columns={columns} data={imageAnimal} />
                    </CardContent>
                    <CardFooter>
                    <Link href="/administrateur">
                            <Button> <Undo2 />Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}
