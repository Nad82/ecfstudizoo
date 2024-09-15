import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


export default function ErrorPage() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="error" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-center text-4xl text-yellow-400">
                            Erreur
                        </CardTitle>
                        <br />
                        <CardDescription className="text-lg text-white">
                            Une erreur est survenue
                        </CardDescription>
                    </CardHeader>
                    <br />
                    <CardContent className="text-white">
                        <CardFooter className="flex justify-items-center">
                            <Button className='flex justify-items-center' onClick={() => window.location.href = "/connexion"}>Retour à la page de connexion</Button>
                        </CardFooter>
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}