
import axios from 'axios'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'


export default async function HabitatsById ({params}: Readonly<{params: {id: number}}>) {
    const habitat = await axios.get(`http://localhost:3000/api/habitat/${params.id}`)
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        console.log(err)
    })


    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="habitat_detail" className="bg-green-800">
                    <CardHeader>
                        <CardTitle className="text-4xl text-yellow-400 text-center">Les détails de l'habitat {params.id}</CardTitle>
                    </CardHeader>
                    <CardDescription className=" text-white">
                        <div>
                            <p className="text-xl">Voici les détails de l'habitat {params.id}:</p>
                            <br />
                            <ul className="text-lg" key={params.id}>
                                <li>Nom: {habitat.nom}</li>
                                <li>Description: {habitat.description}</li>
                                <li>Animaux: {habitat.animal}</li>
                            </ul>
                        </div>
                    </CardDescription>
                </Card>
            </main>
        </div>
    )
}