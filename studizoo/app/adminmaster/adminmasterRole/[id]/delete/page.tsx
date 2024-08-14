"use server"

import RoleformD from "@/components/formsbe/roleforms/roleformD"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Undo2 } from "lucide-react"
import Link from "next/link"


export default async function DeleteRolePage({params}: {params:{id: number}}) {

    return(
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="adminMasterRole_delete" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Supprimer le role {params.id}</CardTitle>
                        <br />
                        <br />
                        <CardDescription className="text-lg text-white">
                            L'espace administrateur vous permet de supprimer le role sous l'identifiant {params.id}.
                        </CardDescription>
                    </CardHeader>
                    <br />
                    <br />
                    <CardContent className=" text-white text-center">
                        <h1>Êtes-vous sûr de vouloir supprimer le role {params.id} ?</h1>
                        <p>Attention, cette action est irréversible.</p>
                        <br />
                        <p>Si vous êtes sûr de vouloir supprimer le role, cliquez sur le bouton ci-dessous:</p>
                        <RoleformD params={params}/>
                    </CardContent>
                    <br />
                    <br />
                    <br />
                    <CardFooter className=" text-white">
                        <p>Si vous souhaitez annuler la suppression du role, cliquez sur le bouton Retour:</p>
                        <Link href="/adminmaster/adminmasterRole">
                            <Button> <Undo2 />Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}
