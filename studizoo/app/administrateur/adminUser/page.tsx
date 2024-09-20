
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Undo2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import { columns } from "@/components/columns/columnsEmploye";
import axios from "axios";



export default async function AdminUser() {
    const user = await axios.get("http://localhost:3000/api/user")
    .then((res) => {
        return res.data
    })

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="adminUser" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-center text-4xl text-yellow-400">
                            Les employés du zoo Arcadia
                        </CardTitle>
                        <br />
                        <CardDescription className="text-lg text-white">
                            L'espace administrateur vous permet de gérer les employés du zoo Arcadia: Créer, modifier ou supprimer les employés.
                        </CardDescription>
                        <Link href="/administrateur/adminUser/create">
                            <Button><Plus />Créer un employé</Button>
                        </Link>
                    </CardHeader>
                    <br />
                    <CardContent className="text-white">
                        <DataTable columns={columns} data={user} />
                    </CardContent>
                    <CardFooter>
                        <Link href="/administrateur">
                            <Button><Undo2 />Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}
