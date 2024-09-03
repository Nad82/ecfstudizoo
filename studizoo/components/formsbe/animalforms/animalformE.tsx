"use client"

import { updateAnimalInDb } from '@/app/api/animal/route'
import { getAllHabitatFromDb } from '@/app/api/habitat/route'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { animalSchema } from '@/lib/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function AnimalformE({params} : {params: {id:number}}) {

    const form = useForm<z.infer<typeof animalSchema>>({
        resolver: zodResolver(animalSchema),
        defaultValues:{
            prenom:"",
            race:"",
            habitatId:1,
        }
    })
    const handleSubmit = (data:z.infer<typeof animalSchema>) => {
        updateAnimalInDb(Number(params.id), data);
    }

    const [habitats, setHabitats] = useState<{ id: number; nom: string |null; description: string |null; }[] | null>(null);

    useEffect(() => {
        async function fetchHabitats() {
            const data = await getAllHabitatFromDb();
            setHabitats(data);
        }
        fetchHabitats();
    }
    ,[])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                control={form.control}
                name="prenom"
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Prénom</FormLabel>
                        <FormControl>
                            <Input className="text-black" placeholder="Prénom" {...field}/>
                        </FormControl>
                        <FormDescription>
                            Modifiez le prénom de l'animal
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name ="race"
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Race</FormLabel>
                        <FormControl>
                            <Input className="text-black" placeholder="Race" {...field}/>
                        </FormControl>
                        <FormDescription>
                            Modifiez la race de l'animal
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="habitatId"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Nom de l'habitat</FormLabel>
                        <FormControl>
                            <Select>
                                <SelectTrigger className="text-black">
                                    <SelectValue className="text-black" placeholder= 'Selectionner un habitat'/>
                                </SelectTrigger>
                                <SelectContent className="text-black">
                                <SelectGroup>
                                            <SelectLabel className="text-black">Choisissez le nom de l'habitat</SelectLabel>
                                            {habitats?.map((habitat) => (
                                                <SelectItem className="text-black" key={habitat.id} value={String(habitat.nom)}>
                                                    {habitat.nom?? 'Pas de nom'}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                </SelectContent>
                            </Select>
                        </FormControl>
                        <FormDescription className='text-white'>
                            Modifiez le nom de l'habitat
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <Button type="submit">Modifier</Button>
            </form>
        </Form>
    )
}
