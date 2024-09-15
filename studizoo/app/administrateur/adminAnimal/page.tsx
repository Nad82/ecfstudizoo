
import { columns } from "@/components/columns/columnsAnimal";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Undo2 } from "lucide-react";
import { getAllAnimalFromDb } from "@/app/api/animal/route";


export default async function AdminAnimal() {
    const animal = await getAllAnimalFromDb();

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="adminAnimal" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center" >Les animaux du zoo Arcadia</CardTitle>
                        <br />
                        <CardDescription className="text-lg text-white" >
                            L'espace administrateur vous permet de gérer les animaux du zoo Arcadia: Créer, modifier ou supprimer les animaux.
                        </CardDescription>
                        <br />
                        <Link href="/administrateur/adminAnimal/create">
                            <Button><Plus/>Créer un animal</Button>
                        </Link>
                    </CardHeader>
                    <br />
                    <CardContent className=" text-white">
                        <DataTable columns={columns} data={animal} />
                    </CardContent>
                    <CardFooter>
                        <Link href="/administrateur">
                            <Button><Undo2/>Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}