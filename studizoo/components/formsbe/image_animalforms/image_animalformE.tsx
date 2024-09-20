"use client"

import { updateImageAnimalInDb } from "@/app/actions/image_animal";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { getAllAnimalFromDb } from "@/app/actions/animal";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { image_animalSchema } from "@/lib/zod";



export default function ImageAnimalFormE({params}: Readonly<{params: {id: number}}>) {
    const form = useForm<z.infer<typeof image_animalSchema>>({
        resolver: zodResolver(image_animalSchema),
        defaultValues: {
            url:"",
            animalId: 1
        }
    })

    const [animals, setAnimals] = useState<{ id: number; prenom: string |null}[] | null>(null);

    useEffect(() => {
        async function fetchAnimals() {
            const data = await getAllAnimalFromDb();
            setAnimals(data);
        }
        fetchAnimals();
    }
    ,[])
    const handleSubmit = (data: z.infer<typeof image_animalSchema>) => {
        updateImageAnimalInDb(params.id, data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                    control={form.control}
                    name="url"
                    render= {({ field}) => (
                        <FormItem>
                            <FormLabel className='text-yellow-400'>Url</FormLabel>
                            <FormControl>
                                <Input className="text-black" placeholder="Url" {...field} />
                            </FormControl>
                            <FormDescription className='text-white'>
                                Entrez l'Url de l'image
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="animalId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-yellow-400'>Animal</FormLabel>
                            <FormControl>
                            <Select  
                                    onValueChange={(value) => field.onChange(Number(value))}
                                    defaultValue={String(field.value)}
                                >
                                    <SelectTrigger className="text-black">
                                        <SelectValue className="text-black" placeholder= 'Selectionner un animal'/>
                                    </SelectTrigger>
                                    <SelectContent className="text-black">
                                    <SelectGroup>
                                        <SelectLabel className="text-black">Choisissez le prenom de l'animal</SelectLabel>
                                        {animals?.map((animal) => (
                                            <SelectItem className="text-black" key={animal.id} value={String(animal.id)}>
                                                {animal.prenom??'Pas de prenom'}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormDescription className='text-white'>
                                Selectionner un animal
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="text-black">Modifier</Button>
            </form>
        </Form>
    )
}