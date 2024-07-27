import { columns } from "@/components/columns/columnsAvis";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllAvisFromDb } from "@/app/api/avis/route";
import HeaderE from "@/components/header-employe";


export default async function EmployeAvis() {
    const avis = await getAllAvisFromDb();

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <HeaderE/>
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="adminEmploye">
                    <CardHeader>
                        <CardTitle>Avis</CardTitle>
                        <CardDescription>
                            Les avis du Zoo Arcadia
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <DataTable columns={columns} data={avis!} />
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}
