import { getAllUserFromDb } from "@/app/api/user/route";
import { columns } from "@/components/columns/columnsEmploye";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HeaderA from "@/components/header-administrateur";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default async function AdminEmploye() {
    const user = await getAllUserFromDb();

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <HeaderA/>
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="adminEmploye">
                    <CardHeader>
                        <CardTitle>Employés</CardTitle>
                        <CardDescription>
                            Les employés du Zoo Arcadia
                        </CardDescription>
                        <Link href="/administrateur/adminEmploye/create">
                            <Button variant="outline">Créer un employé</Button>
                        </Link>
                    </CardHeader>
                    <CardContent>
                        <DataTable columns={columns} data={user!} />
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}
