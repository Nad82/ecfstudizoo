import { columns } from "@/components/columns/columnsAvis";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllAvisFromDb } from "@/app/api/avis/route";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";


export default async function EmployeAvis() {
    const avis = await getAllAvisFromDb();

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="adminEmployeAvis"className="bg-green-800" >
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Les avis du zoo Arcadia</CardTitle>
                        <CardDescription className="text-lg text-white">
                            L'espace employé vous permet de gérer les avis du zoo Arcadia:les valider ou non.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className=" text-white">
                        <DataTable columns={columns} data={avis!} />
                    </CardContent>
                    <CardFooter>
                        <Link href="/employe">
                            <Button> <Undo2 />Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}
