
import { columns } from "@/components/columns/columnsHoraires";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Undo2 } from "lucide-react";
import axios from "axios";


export default async function AdminHoraires() {
    const horaires = axios.get("http://localhost:3000/api/horaires")
    .then((res) => {
        return res.data
    })

    if(!horaires) {
        return <div>Erreur lors de la récupération des horaires</div>
    }

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ">
                <Card x-chunk="adminHoraires" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Les horaires du zoo Arcadia</CardTitle>
                        <br />
                        <CardDescription className="text-lg text-white">
                            L'espace administrateur vous permet de gérer les horaires du zoo Arcadia: Créer, modifier ou supprimer les horaires.
                        </CardDescription>
                        <br />
                        <Link href="/administrateur/adminHoraires/create">
                            <Button><Plus/>Créer des horaires</Button>
                        </Link>
                    </CardHeader>
                    <CardContent className=" text-white">
                        <DataTable columns={columns} data={horaires} />
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