
import { columns } from "@/components/columns/columnsConsommationAnimalV";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllConsommationAnimalFromDb } from "@/app/api/consommation_animal/route";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";


export default async function VetoConsommationAnimal() {
    const consommationAnimal = await getAllConsommationAnimalFromDb();

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="vetoConsommationAnimal"  className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center" >Les Consommations de nourriture des animaux du zoo Arcadia</CardTitle>
                        <br/>
                        <CardDescription className="text-lg text-white">
                            L'espace vétérinaire vous permet de consulter les consommations de nourriture des animaux du zoo Arcadia.
                        </CardDescription>
                    </CardHeader>
                    <br/>
                    <CardContent className="text-white">
                        <DataTable columns={columns} data={consommationAnimal!} />
                    </CardContent>
                    <CardFooter>
                        <Link href="/veterinaire">
                            <Button><Undo2/>Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}
