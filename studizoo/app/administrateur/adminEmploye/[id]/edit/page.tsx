"use server"

import { getUserFromDb } from "@/app/api/user/route"
import UserformE from "@/components/formsbe/userforms/userformE"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Undo2 } from "lucide-react"
import Link from "next/link"


export default async function EditEmployePage({params} : {params: {id:number}}) {

    const user = await getUserFromDb (Number(params.id))

    if(!user) {
        return <div>Erreur lors de la récupération de l'employé</div>
    }

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="adminUser_edit" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Modifier l'employé du zoo Arcadia {params.id}</CardTitle>
                        <br />
                        <br />
                        <CardDescription className="text-lg text-white">
                            L'espace administrateur vous permet de modifier l'employé du zoo Arcadia sous l'identifiant {params.id}. Veuillez les modifier via le formulaire ci-dessous:
                        </CardDescription>
                    </CardHeader>
                    <br />
                    <CardContent className=" text-white">
                        <ul>
                            <li>Email: {user.email}</li>
                            <li>Password: {user.password}</li>
                            <li>Email Verifié: {user.email_verified ? user.email_verified.toLocaleString() : 'Non vérifié'}</li>
                            <li>Créé le: {user.created_at ? user.created_at.toLocaleString() :'Non créé'}</li>
                            <li>Modifié le: {user.updated_at? user.updated_at.toLocaleString() : 'Non modifié'}</li>
                            <li>Role: {user.role_id}</li>
                        </ul>
                        <br />
                        <UserformE params={params}/>
                    </CardContent>
                    <br />
                    <CardFooter>
                        <Link href="/administrateur/adminEmploye">
                            <Button> <Undo2 />Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}