
import { columns } from "@/components/columns/columnsConsommationAnimal";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeaderE from "@/components/header-employe";
import { getAllConsommationAnimalFromDb } from "@/app/api/consommation_animal/route";


export default async function EmployeConsommationAnimal() {
    const consommationAnimal = await getAllConsommationAnimalFromDb();

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <HeaderE/>
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="employeConsommationAnimal">
                    <CardHeader>
                        <CardTitle>Consommation des animaux</CardTitle>
                        <CardDescription>
                            Les consommations du Zoo Arcadia
                        </CardDescription>
                        <Link href="/employe/employeConsommationAnimal/create">
                            <Button variant="outline">Créer une consommation de nourriture pour un animal</Button>
                        </Link>
                    </CardHeader>
                    <CardContent>
                        <DataTable columns={columns} data={consommationAnimal!} />
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}
