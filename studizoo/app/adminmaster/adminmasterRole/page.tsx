import { getAllRoleFromDb } from "@/app/api/role/route";
import { columns } from "@/components/columns/columnsRole";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Undo2, Plus } from "lucide-react";
import Link from "next/link";


export default async function AdminMasterRole() {
    const role = await getAllRoleFromDb();

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ">
                <Card x-chunk="adminMaster" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Les roles des employés du zoo Arcadia</CardTitle>
                        <br />
                        <CardDescription className="text-lg text-white">
                            L'espace adminmaster vous permet de gérer les roles des employés du zoo Arcadia: Créer, modifier ou supprimer les roles.
                        </CardDescription>
                        <br />
                        <Link href="/adminmaster/adminmasterRole/create">
                            <Button><Plus/>Créer un role</Button>
                        </Link>
                    </CardHeader>
                    <CardContent className=" text-white">
                        <DataTable columns={columns} data={role!} />
                    </CardContent>
                    <CardFooter>
                        <Link href="/adminmaster">
                            <Button> <Undo2 />Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}