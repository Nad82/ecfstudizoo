"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { image_animalSchema } from '@/lib/zod';
import { createImageAnimalInDb } from '@/app/api/image_animal/route';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import { getAllAnimalFromDb } from '@/app/api/animal/route';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';


export default function ImageAnimalformC() {
    const form = useForm<z.infer<typeof image_animalSchema>>({
        resolver: zodResolver(image_animalSchema),
        defaultValues: {
            blob:"",
            animalId: 1
        }
    })

    const [animals, setAnimals] = useState<{ id: number; prenom: string |null; race:string |null}[] | null>(null);

    useEffect(() => {
        async function fetchAnimals() {
            const data = await getAllAnimalFromDb();
            setAnimals(data);
        }
        fetchAnimals();
    }
    ,[])

    const handleSubmit = (data: z.infer<typeof image_animalSchema>) => {
        createImageAnimalInDb(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                    control={form.control}
                    name="blob"
                    render= {({ field}) => (
                        <FormItem>
                            <FormLabel className='text-yellow-400'>Blob</FormLabel>
                            <FormControl>
                                <Input className="text-black" placeholder="Blob" {...field} />
                            </FormControl>
                            <FormDescription className='text-white'>
                                Entrez le blob de l'image
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
                                            <SelectLabel className="text-black">Choisissez un animal</SelectLabel>
                                            {animals?.map((animal) => (
                                                <SelectItem className="text-black" key={animal.id} value={String(animal.id)}>
                                                    {animal.prenom?? 'Pas de prénom'}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormDescription className='text-white'>
                                Entrez l'animal
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}