import { getAllStatAnimalFromDb } from "@/app/api/stat_animal/route";
import ChartStat  from "@/components/chart-stat";


export default async function AdminStatAnimal() {

    const statAnimal = await getAllStatAnimalFromDb();

    if (!statAnimal) {
        return <div>Erreur lors de la récupération des données</div>
    }

    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <ChartStat data = {statAnimal} />
            </main>
        </div>
    )
}