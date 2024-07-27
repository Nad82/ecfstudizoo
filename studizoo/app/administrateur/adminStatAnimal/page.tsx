
import { columns } from "@/components/columns/columnsStatAnimal";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HeaderA from "@/components/header-administrateur";
import { getAllStatAnimalFromDb } from "@/app/api/stat_animal/route";


export default async function AdminStatAnimal() {
    const statAnimal = await getAllStatAnimalFromDb();

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <HeaderA/>
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="adminStatAnimal">
                    <CardHeader>
                        <CardTitle>Statistiques Animaux</CardTitle>
                        <CardDescription>
                            Les statistiques des animaux du Zoo Arcadia
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <DataTable columns={columns} data={statAnimal!} />
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}