
import { columns } from "@/components/columns/columnsServices";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAllServicesFromDb } from "@/app/api/servicess/route";
import HeaderE from "@/components/header-employe";


export default async function EmployeServices() {
    const services = await getAllServicesFromDb();

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <HeaderE/>
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="employeServices">
                    <CardHeader>
                        <CardTitle>Services</CardTitle>
                        <CardDescription>
                            Les services du Zoo Arcadia
                        </CardDescription>
                        <Link href="/employe/employeServices/create">
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
