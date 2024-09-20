"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { image_habitatSchema } from '@/lib/zod';
import { createImageHabitatInDb } from '@/app/actions/image_habitat';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import { getAllHabitatFromDb } from '@/app/actions/habitat';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { SendHorizonal } from 'lucide-react';


export default function ImageHabitatformC() {
    const form = useForm<z.infer<typeof image_habitatSchema>>({
        resolver: zodResolver(image_habitatSchema),
        defaultValues: {
            nom:"",
            habitatId: 1
        }
    })

    const [habitats, setHabitats] = useState<{ id: number; nom: string|null; description: string |null }[] | null>(null);

    useEffect(() => {
        async function fetchHabitats() {
            const data = await getAllHabitatFromDb();
            setHabitats(data);
        }
        fetchHabitats();
    }
    ,[])

    const handleSubmit = (data: z.infer<typeof image_habitatSchema>) => {
        createImageHabitatInDb(data)
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
                    name="habitatId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-yellow-400'>Habitat</FormLabel>
                            <FormControl>
                            <Select  
                                    onValueChange={(value) => field.onChange(Number(value))}
                                    defaultValue={String(field.value)}
                                >
                                    <SelectTrigger className="text-black">
                                        <SelectValue className="text-black" placeholder= 'Selectionner un habitat'/>
                                    </SelectTrigger>
                                    <SelectContent className="text-black">
                                    <SelectGroup>
                                        <SelectLabel className="text-black">Choisissez le nom de l'habitat</SelectLabel>
                                            {habitats?.map((habitat) => (
                                                <SelectItem className="text-black" key={habitat.id} value={String(habitat.id)}>
                                                    {habitat.nom?? 'Pas de nom'}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormDescription className='text-white'>
                                Entrez le nom de l'habitat
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit"><SendHorizonal/>Créer</Button>
            </form>
        </Form>
    )
}