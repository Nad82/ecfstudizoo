
import { columns } from "@/components/columns/columnsServices";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HeaderA from "@/components/header-administrateur";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAllServicesFromDb } from "@/app/api/servicess/route";


export default async function AdminServices() {
    const services = await getAllServicesFromDb();

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <HeaderA/>
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="adminServices">
                    <CardHeader>
                        <CardTitle>Services</CardTitle>
                        <CardDescription>
                            Les services du Zoo Arcadia
                        </CardDescription>
                        <Link href="/administrateur/adminServices/create">
                            <Button variant="outline">Créer un service</Button>
                        </Link>
                    </CardHeader>
                    <CardContent>
                        <DataTable columns={columns} data={services!} />
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}
