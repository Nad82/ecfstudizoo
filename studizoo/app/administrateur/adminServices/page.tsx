
import { columns } from "@/components/columns/columnsServices";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAllServicesFromDb } from "@/app/api/servicess/route";
import { Plus, Undo2 } from "lucide-react";


export default async function AdminServices() {
    const services = await getAllServicesFromDb();

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="adminServices" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Les services du zoo Arcadia</CardTitle>
                        <br />
                        <CardDescription className="text-lg text-white">
                            L'espace administrateur vous permet de gérer les services du zoo Arcadia: Créer, modifier ou supprimer les services.
                        </CardDescription>
                        <br />
                        <Link href="/administrateur/adminServices/create">
                            <Button><Plus/>Créer un service</Button>
                        </Link>
                    </CardHeader>
                    <CardContent className=" text-white">
                        <DataTable columns={columns} data={services!} />
                    </CardContent>
                    <CardFooter>
                        <Link href="/administrateur">
                            <Button> <Undo2 />Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}
