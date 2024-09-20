"use server"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { NextResponse } from "next/server"
import UserformE from "@/components/formsbe/userforms/userformE"
import { Link, Undo2 } from "lucide-react"
import axios from "axios"


export default async function EditUserPage({params} : Readonly<{params: {id:number}}>){

    const response = await axios.get(`http://localhost:3000/api/user/${params.id}`)
        .then((res) => {
            return res.data
        }
    )
    
        if(response instanceof NextResponse) {
            const jsonResponse = await response.json()
            if(jsonResponse.error) {
                return <div>Erreur lors de la récupération de l'utilisateur: {jsonResponse.error}</div>
            }
        }

        const user = response as {id: number, email: string; password:string|null; role_id: number; created_at: Date|null; updated_at: Date |null; email_verified: Date|null}

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="editUser" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-center text-4xl text-yellow-400">
                            Modifier un Utilisateur
                        </CardTitle>
                        <br />
                        <CardDescription className="text-lg text-white">
                            Vous êtes sur le point de modifier un utilisateur: êtes-vous sûr?
                        </CardDescription>
                    </CardHeader>
                    <br />
                    <CardContent className="text-white">
                    <ul className="text-lg">
                        <li>Email: {user.email}</li>
                        <li>Role: {user.role_id}</li>
                        <li>Créé le: {user.created_at? user.created_at.toLocaleDateString():'Pas de Date'}</li>
                        <li>Mis à jour le: {user.updated_at? user.updated_at.toLocaleDateString():'Pas de Mise à jour'}</li>
                        <li>Email vérifié: {user.email_verified? user.email_verified.toLocaleDateString():'Pas de vérification'}</li>
                    </ul>
                    <UserformE params={params}/>
                    </CardContent>
                    <br />
                    <CardFooter>
                        <Link href="/administrateur/adminUser">
                            <Button> <Undo2 />Retour</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}