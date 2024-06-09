"use client"

import React from 'react'
import { Button } from './ui/button'
import { SendHorizontal } from 'lucide-react'
import { Input } from './ui/input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormLabel, FormItem, FormMessage, FormDescription } from './ui/form'
import { Textarea } from './ui/textarea'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'

const formSchema = z.object({
    pseudo: z.string().min(3, "Le pseudo doit contenir au moins 3 caractères").max(20, "Le pseudo doit contenir au maximum 20 caractères"),
    commentaires: z.string().min(10, "Les commentaires doivent contenir au moins 10 caractères").max(200, "Les commentaires doivent contenir au maximum 200 caractères"),
})

export function Formulaireavis() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            pseudo: '',
            commentaires: '',
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log (values)
    }

    return (
        <Card className='bg-green-800  '>
            <CardHeader>
                <CardTitle className="text-4xl text-yellow-400 text-center">Laissez-nous un avis</CardTitle>
                <CardDescription className="text-lg text-white text-center">De même que vous avez pu lire les commentaires de nos clients, n'hésitez pas à laisser le votre!!</CardDescription>
            </CardHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                    <FormField
                    control={form.control}
                    name='pseudo'
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className='text-yellow-400'>Pseudo</FormLabel>
                        <FormControl>
                            <Input placeholder='Votre pseudo' {...field} />
                        </FormControl>
                        <FormDescription className='text-white'>
                            Entrez votre pseudo
                        </FormDescription>
                        <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='commentaires'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-yellow-400'>Commentaires</FormLabel>
                            <FormControl>
                                <Textarea placeholder='Vos commentaires' {...field} />
                            </FormControl>
                            <FormDescription className='text-white'>
                                Entrez vos commentaires
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <div className="flex h-full items-center justify-center p-6">
                    <Button type='submit' className='item-center'> <SendHorizontal />  Envoyer</Button>
                </div>
            </form>
        </Form>
    </Card>
    )
}


