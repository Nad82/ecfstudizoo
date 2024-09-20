"use client"

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {animalSchema} from '@/lib/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SendHorizontal } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { getAllHabitatFromDb } from '@/app/actions/habitat'
import { createAnimalInDb } from '@/app/actions/animal'



export default function AnimalformC () {

    const form = useForm<z.infer<typeof animalSchema >>({
        resolver: zodResolver(animalSchema),
        defaultValues: {
            prenom: "",
            race: "",
            habitatId: 1
        }
    }) 

    const [habitats, setHabitats] = useState<{ id: number; nom: string |null; description: string |null; }[] | null>(null);

    useEffect(() => {
        async function fetchHabitats() {
            const data = await getAllHabitatFromDb();
            setHabitats(data);
        }
        fetchHabitats();
    }
    ,[])

    const handleSubmit = (data:z.infer<typeof animalSchema>) => {
        createAnimalInDb(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                control={form.control}
                name="prenom"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Prénom</FormLabel>
                        <FormControl>
                            <Input className="text-black" placeholder="Prénom" {...field}/>
                        </FormControl>
                        <FormDescription className='text-white'>
                            Entrez le prénom de l'animal
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name= "race"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Race</FormLabel>
                        <FormControl>
                            <Input className="text-black" placeholder="Race"{...field}/>
                        </FormControl>
                        <FormDescription className='text-white'>
                            Entrez la race de l'animal
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
                                Selectionnez le nom de l'habitat
                            </FormDescription>
                            <FormMessage/>
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