import axios from "axios";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";



export default async function AnimalById({params}: Readonly<{params: {id: number}}>) {

    const animal = await axios.get(`http://localhost:3000/api/animal/${params.id}`)
    .then((res) => {
        return res.data
    })


    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="animal_detail" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Les détails de l'animal {params.id}</CardTitle>
                    </CardHeader>
                    <CardDescription className=" text-white">
                        <div>
                            <p className="text-xl">Voici les détails de l'animal {params.id}:</p>
                            <br />
                            <ul className="text-lg">
                                <li>Nom: {animal.prenom}</li>
                                <li>Race: {animal.race}</li>
                                <li>Habitat: {animal.habitat}</li>
                            </ul>
                        </div>
                    </CardDescription>
                </Card>
            </main>
        </div>
    )
}