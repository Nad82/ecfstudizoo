
import { columns } from "@/components/columns/columnsEmploye";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HeaderA from "@/components/header-administrateur";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAllAnimalsFromDb } from "@/app/api/animal/route";


export default async function AdminAnimal() {
    const animal = await getAllAnimalsFromDb();

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <HeaderA/>
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="adminEmploye">
                    <CardHeader>
                        <CardTitle>Animaux</CardTitle>
                        <CardDescription>
                            Les animaux du Zoo Arcadia
                        </CardDescription>
                        <Link href="/administrateur/adminAnimal/create">
                            <Button variant="outline">Créer un animal</Button>
                        </Link>
                    </CardHeader>
                    <CardContent>
                        <DataTable columns={columns} data={animal!} />
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}