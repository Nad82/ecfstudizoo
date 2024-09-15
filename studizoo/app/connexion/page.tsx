import { Button } from "@/components/ui/button"
import { signIn } from "../auth"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


export default function SignIn() {
    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40" >
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="signIn" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-center text-4xl text-yellow-400" >
                            Se Connecter
                        </CardTitle>
                        <br />
                        <CardDescription className="text-lg text-white">
                            Connectez-vous pour accéder à votre compte
                        </CardDescription>
                    </CardHeader>
                    <br />
                    <CardContent className="text-white">
                        <form
                            action={async (formData) => {
                            "use server"
                            await signIn("credentials", formData)
                            }}
                        >
                            <label className="text-2xl text-yellow-400">
                                Email
                                <br />
                                <Input className="text-black" placeholder="Email"/>
                            </label>
                            <br />
                            <br />
                            <label className="text-2xl text-yellow-400">
                            Mot de passe
                                <br />
                                <Input className="text-black" placeholder="Mot de passe" />
                            </label>
                            <br />
                            <br />
                        </form>
                        <CardFooter className="flex h-full items-center justify-center p-6">
                            <Button type='submit' className='flex justify-items-center'>Se connecter</Button>
                        </CardFooter>
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}
        