"use client"

import { updateAnimalInDb } from '@/app/api/animal/route'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { animalSchema } from '@/lib/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function AnimalformE({params} : {params: {id:number}}) {

    const form = useForm<z.infer<typeof animalSchema>>({
        resolver: zodResolver(animalSchema),
        defaultValues:{
            prenom:"",
            race:"",
        }
    })
    const handleSubmit = (data:z.infer<typeof animalSchema>) => {
        updateAnimalInDb(Number(params.id), data)
    }

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
                <Button type="submit">Modifier</Button>
            </form>
        </Form>
    )
}
