
import { getAllHorairesFromDb } from "@/app/api/horaires/route";
import { columns } from "@/components/columns/columnsHoraires";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HeaderA from "@/components/header-administrateur";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default async function AdminHoraires() {
    const horaires = await getAllHorairesFromDb();

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <HeaderA/>
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="adminHoraires">
                    <CardHeader>
                        <CardTitle>Horaires</CardTitle>
                        <CardDescription>
                            Les horaires du Zoo Arcadia
                        </CardDescription>
                        <Link href="/administrateur/adminHoraires/create">
                            <Button variant="outline">Créer des horaires</Button>
                        </Link>
                    </CardHeader>
                    <CardContent>
                        <DataTable columns={columns} data={horaires!} />
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}
