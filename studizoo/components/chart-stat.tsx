"use client"

import { PawPrint, Undo2} from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    } from "@/components/ui/chart"
import { Button } from "./ui/button"
import Link from "next/link"


const chartConfig = {
    clic: {
        label: "Clic",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

interface ChartStatProps {
    data: { id: string; clic: number; date_created: Date; prenom: string; }[];
}

export default  function ChartStat({ data }: ChartStatProps) {
    return (
        <Card x-chunk="adminStatAnimal" className="bg-green-800">
            <CardHeader>
                <CardTitle className="text-4xl text-yellow-400 text-center">Statistiques des animaux du zoo Arcadia </CardTitle>
                <CardDescription className="text-lg text-white">L'espace administrateur permet de consulter les statisques pour chaque animal du zoo Arcadia</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={data}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                    dataKey="prenom"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                    />
                    <Bar dataKey="clic" fill="var(--color-desktop)" radius={8} />
                </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm text-white ">
                <div className="flex gap-2 font-medium leading-none text-white">
                Statistiques des animaux: nombre de clics par animal <PawPrint className="h-4 w-4" />
                </div>
                <div className="leading-none text-white">
                Voyez les statistiques des animaux du zoo Arcadia pour chaque animal du zoo.
                </div>
                <span className="text-white flex space-x-4">
                <Button>Partager</Button>
                <Button>Exporter</Button>
                <Button>Imprimer</Button>
                <Link href="/administrateur">
                    <Button><Undo2/>Retour</Button>
                </Link>
                </span>
            </CardFooter>
        </Card>
    )
}
