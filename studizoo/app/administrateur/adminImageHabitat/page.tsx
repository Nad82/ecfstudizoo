import { columns } from "@/components/columns/columnsImageHabitat";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllImageHabitatFromDb } from "@/app/api/image_habitat/route";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";


export default async function adminImageHabitat() {
    const imageHabitat = await getAllImageHabitatFromDb();

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="adminImageHabitat" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Les images des habitats du zoo Arcadia</CardTitle>
                        <CardDescription className="text-lg text-white">
                            L'espace administrateur vous permet de gérer les images des habitats du zoo Arcadia: Créer, modifier ou supprimer les images.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className=" text-white">
                        <DataTable columns={columns} data={imageHabitat!} />
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
