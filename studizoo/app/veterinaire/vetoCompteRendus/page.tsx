import { columns } from "@/components/columns/columnsCompteRendus";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Undo2 } from "lucide-react";
import axios from "axios";


export default async function VetoCompteRendus() {
    const compteRendus = await axios.get('http://localhost:3000/api/compte_rendu')

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="vetoCompteRendu" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Les compte Rendus du zoo Arcadia</CardTitle>
                        <br />
                        <CardDescription className="text-lg text-white">
                            L'espace vétérinaire vous permet de gérer les compte-rendus du zoo Arcadia: les consulter, les modifier, les supprimer ou en créer de nouveaux.
                        </CardDescription>
                        <br />
                        <Link href="/veterinaire/vetoCompteRendus/create">
                            <Button><Plus/>Créer un compte-rendu</Button>
                        </Link>
                        <br />
                    </CardHeader>
                    <CardContent className="text-white">
                        <DataTable columns={columns} data={compteRendus} />
                    </CardContent>
                    <CardFooter>
                        <Link href="/veterinaire">
                            <Button><Undo2/>Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}