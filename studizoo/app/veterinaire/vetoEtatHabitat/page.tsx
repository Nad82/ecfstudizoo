import { columns } from "@/components/columns/columnsEtatHabitat";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeaderV from "@/components/header-veterinaire";
import { getAllEtatHabitatFromDb } from "@/app/api/etat_habitat/route";


export default async function VetoEtatHabitat() {
    const etatHabitat = await getAllEtatHabitatFromDb();

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <HeaderV/>
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="vetoCompteRendu">
                    <CardHeader>
                        <CardTitle>Etat des habitats</CardTitle>
                        <CardDescription>
                            L'état des habitats du Zoo Arcadia
                        </CardDescription>
                        <Link href="/veterinaire/vetoEtatHabitat/create">
                            <Button variant="outline">Créer un état d'un habitat</Button>
                        </Link>
                    </CardHeader>
                    <CardContent>
                        <DataTable columns={columns} data={etatHabitat!} />
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}