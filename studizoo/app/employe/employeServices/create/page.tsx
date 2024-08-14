import ServicesFormCE from "@/components/formsbe/servicesforms/servicesformCE";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Undo2 } from "lucide-react";
import Link from "next/link";


export default function CreateServiceEPage(){
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ">
                <Card x-chunk="employeServices_create" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Création d'un service</CardTitle>
                        <br />
                        <br />
                        <CardDescription className="text-lg text-white">
                            L'espace employe vous permet de créer un service. Veuillez remplir le formulaire ci-dessous:
                        </CardDescription>
                    </CardHeader>
                    <br />
                    <CardContent className=" text-white">
                        <ServicesFormCE />
                    </CardContent>
                    <br />
                    <CardFooter>
                        <Link href="/employe/employeServices">
                            <Button> <Undo2 />Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}