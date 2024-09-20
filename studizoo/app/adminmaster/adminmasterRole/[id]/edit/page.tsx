"use server"

import RoleformE from "@/components/formsbe/roleforms/roleformE"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import axios from "axios"
import { Undo2 } from "lucide-react"
import Link from "next/link"


export default async function EditRolePage ({params}: Readonly<{params:{id:number}}>) {

    const role = await axios.get(`http://localhost:3000/api/role/${params.id}`)
    .then((res) => {
        return res.data
    })

    if(!role) {
        return <div>Erreur lors de la récupération du role</div>
    }

    return(
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="adminMasterRole_edit" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Modifier le role {params.id}</CardTitle>
                        <br />
                        <br />
                        <CardDescription className="text-lg text-white">
                            L'espace administrateur vous permet de modifier le role sous l'identifiant {params.id}.
                        </CardDescription>
                    </CardHeader>
                    <br />
                    <br />
                    <CardContent className=" text-white text-center">
                        <ul>
                            <li>Nom: {role.nom}</li>
                        </ul>
                        <RoleformE params={params}/>
                    </CardContent>
                    <br />
                    <br />
                    <br />
                    <CardFooter className=" text-white">
                        <Link href="/adminmaster/adminmasterRole">
                            <Button> <Undo2 />Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}
