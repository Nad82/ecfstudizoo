import { getAllUserFromDb } from "@/app/api/user/route";
import { columns } from "@/components/columns/columnsEmploye";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Undo2 } from "lucide-react";


export default async function AdminEmploye() {
    const user = await getAllUserFromDb();

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="adminEmploye" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Les employés du zoo Arcadia</CardTitle>
                        <CardDescription className="text-lg text-white">
                            Les employés du Zoo Arcadia
                        </CardDescription>
                        <Link href="/administrateur/adminEmploye/create">
                            <Button><Plus/>Créer un employé</Button>
                        </Link>
                    </CardHeader>
                    <CardContent className=" text-white">
                        <DataTable columns={columns} data={user!} />
                    </CardContent>
                    <CardFooter>
                        <Link href="/administrateur">
                            <Button><Undo2/>Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}
