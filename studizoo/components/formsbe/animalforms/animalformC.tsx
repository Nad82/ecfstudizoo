"use client"

import { createAnimalInDb } from '@/app/api/animal/route'
import { createImageAnimalInDb } from '@/app/api/image_animal/route'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { SendHorizontal } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'


const combinedSchema = z.object({
    prenom : z.string(),
    race: z.string(),
    nom: z.string()
})

export default function AnimalformC() {

    const form = useForm<z.infer<typeof combinedSchema >>({
        resolver: zodResolver(combinedSchema),
        defaultValues :{
            prenom:"",
            race:"",
            nom:""
        }
    })
    const handleSubmit = (data:z.infer<typeof combinedSchema>) => {
        const {prenom, race, nom} = data;
        createAnimalInDb({prenom, race});
        createImageAnimalInDb({nom});
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
                name="nom"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Nom de l'image</FormLabel>
                        <FormControl>
                            <Input className="text-black" placeholder="Nom de l'image" {...field}/>
                        </FormControl>
                        <FormDescription className='text-white'>
                            Entrez le nom de l'image
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
