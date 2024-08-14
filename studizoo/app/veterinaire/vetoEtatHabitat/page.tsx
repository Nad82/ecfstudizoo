import { columns } from "@/components/columns/columnsEtatHabitat";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeaderV from "@/components/header-veterinaire";
import { getAllEtatHabitatFromDb } from "@/app/api/etat_habitat/route";
import { Plus, Undo2 } from "lucide-react";


export default async function VetoEtatHabitat() {
    const etatHabitat = await getAllEtatHabitatFromDb();

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="vetoCompteRendu" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center" >L'état des habitats du zoo Arcadia</CardTitle>
                        <CardDescription className="text-lg text-white">
                            L'espace vétérinaire vous permet de gérer les états des habitats du zoo Arcadia: les consulter, les modifier ou en créer de nouveaux.
                        </CardDescription>
                        <Link href="/veterinaire/vetoEtatHabitat/create">
                            <Button><Plus/>Créer un état d'un habitat</Button>
                        </Link>
                    </CardHeader>
                    <CardContent className="text-white">
                        <DataTable columns={columns} data={etatHabitat!} />
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