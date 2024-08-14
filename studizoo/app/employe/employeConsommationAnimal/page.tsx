
import { columns } from "@/components/columns/columnsConsommationAnimal";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAllConsommationAnimalFromDb } from "@/app/api/consommation_animal/route";
import { Plus, Undo2 } from "lucide-react";


export default async function EmployeConsommationAnimal() {
    const consommationAnimal = await getAllConsommationAnimalFromDb();

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="employeConsommationAnimal" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center"> Les consommations de nourriture des animaux du zoo Arcadia</CardTitle>
                        <CardDescription className="text-lg text-white">
                            L'espace employé vous permet de gérer les consommations de nourriture des animaux du zoo Arcadia: les ajouter, les modifier ou les supprimer.
                        </CardDescription>
                        <Link href="/employe/employeConsommationAnimal/create">
                            <Button><Plus/>Créer une consommation de nourriture pour un animal</Button>
                        </Link>
                    </CardHeader>
                    <CardContent className=" text-white">
                        <DataTable columns={columns} data={consommationAnimal!} />
                    </CardContent>
                    <CardFooter>
                        <Link href="/employe">
                            <Button> <Undo2 />Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}
