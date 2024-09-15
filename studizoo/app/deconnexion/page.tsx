import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { signOut } from "../auth"

export default function SignOut() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="signOut" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-center text-4xl text-yellow-400">
                            Se Déconnecter
                        </CardTitle>
                        <br />
                        <CardDescription className="text-lg text-white">
                            Vous êtes sur le point de vous déconnecter: êtes-vous sûr?
                        </CardDescription>
                    </CardHeader>
                    <br />
                    <CardContent className="text-white">
                        <form
                            action={async (formData) => {
                                "use server"
                                await signOut()
                            }}
                        >
                            <CardFooter className="flex h-full items-center justify-center p-6">
                                <Button type='submit' className='flex justify-items-center'>Se déconnecter</Button>
                            </CardFooter>
                        </form>
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}