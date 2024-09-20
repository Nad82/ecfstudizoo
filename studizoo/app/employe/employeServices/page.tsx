
import { columns } from "@/components/columns/columnsServicesE";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Undo2 } from "lucide-react";
import axios from "axios";


export default async function EmployeServices() {
    const services = await axios.get("http://localhost:3000/api/servicesE")
    .then((res) => {
        return res.data
    })

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="employeServices" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Les services du zoo Arcadia</CardTitle>
                        <CardDescription className="text-lg text-white">
                            L'espace employé vous permet de gérer les services du zoo Arcadia: les ajouter, les modifier ou les supprimer.
                        </CardDescription>
                        <Link href="/employe/employeServices/create">
                            <Button><Plus/>Créer un service</Button>
                        </Link>
                    </CardHeader>
                    <CardContent className=" text-white">
                        <DataTable columns={columns} data={services} />
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
