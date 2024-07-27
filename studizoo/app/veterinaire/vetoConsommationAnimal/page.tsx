
import { columns } from "@/components/columns/columnsConsommationAnimal";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllConsommationAnimalFromDb } from "@/app/api/consommation_animal/route";
import HeaderV from "@/components/header-veterinaire";


export default async function VetoConsommationAnimal() {
    const consommationAnimal = await getAllConsommationAnimalFromDb();

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <HeaderV/>
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="vetoConsommationAnimal">
                    <CardHeader>
                        <CardTitle>Consommation des animaux</CardTitle>
                        <CardDescription>
                            Les consommations du Zoo Arcadia
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <DataTable columns={columns} data={consommationAnimal!} />
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}
