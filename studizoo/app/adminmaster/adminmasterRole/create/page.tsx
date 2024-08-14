
import Link from 'next/link'
import RoleFormC from '@/components/formsbe/roleforms/roleformC'
import { Button } from '@/components/ui/button'
import { Undo2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function CreateRole() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ">
                <Card x-chunk="adminmasterRole_create" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Création d'un role</CardTitle>
                        <br />
                        <br />
                        <CardDescription className="text-lg text-white">
                            L'espace administrateur vous permet de créer un role. Veuillez remplir le formulaire ci-dessous.
                        </CardDescription>
                    </CardHeader>
                    <br />
                    <CardContent className=" text-white">
                        <RoleFormC />
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