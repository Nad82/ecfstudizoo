"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { image_animalSchema } from '@/lib/zod';
import { createImageAnimalInDb } from '@/app/actions/image_animal';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import { getAllAnimalFromDb } from '@/app/actions/animal';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { SendHorizontal } from 'lucide-react';


export default function ImageAnimalformC() {
    const form = useForm<z.infer<typeof image_animalSchema>>({
        resolver: zodResolver(image_animalSchema),
        defaultValues: {
            nom:"",
            animalId: 1
        }
    })

    const [animals, setAnimals] = useState<{ id: number; prenom: string | null,  }[] | null>(null)

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
                    name="nom"
                    render= {({ field}) => (
                        <FormItem>
                            <FormLabel className='text-yellow-400'>Nom</FormLabel>
                            <FormControl>
                                <Input className="text-black" placeholder="Nom" {...field} />
                            </FormControl>
                            <FormDescription className='text-white'>
                                Entrez le nom de l'image
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
                <br />
                <div className="flex h-full items-center justify-center p-6">
                    <Button type='submit' className='item-center'><SendHorizontal/>Créer</Button>
                </div>
            </form>
        </Form>

    )
}