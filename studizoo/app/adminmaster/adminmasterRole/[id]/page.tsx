"use server"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import axios from "axios"
import { Undo2 } from "lucide-react"
import Link from "next/link"


export default async function AdminMasterRole({params} : Readonly<{params: {id:number}}>) {

    const role = await axios.get(`http://localhost:3000/api/role/${params.id}`)
    .then((res) => {
        return res.data
    })

    if(!role) {
        return <div>Erreur lors de la récupération du role</div>
    }

    return(
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ">
                <Card x-chunk="adminMaster" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Le role {params.id} </CardTitle>
                    </CardHeader>
                    <CardContent className=" text-white">
                        <div>
                            <p className="text-xl">Voici les détails du role {params.id}:</p>
                            <br />
                            <ul className="text-lg">
                                <li>Nom: {role.nom}</li>
                            </ul>
                        </div>
                    </CardContent>
                    <br />
                    <CardFooter>
                        <Link href="/adminmaster/adminmasterRole">
                            <Button> <Undo2 />Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}