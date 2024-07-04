"use client"
import  React, { useEffect } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormLabel, FormItem, FormMessage, FormDescription } from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { SendHorizontal } from 'lucide-react'
import { useFormState } from 'react-dom'
import { sendEmail } from '@/app/api/send/route'
import { Textarea } from './ui/textarea'



const formSchema = z.object({
    titre: z.string().min(3, "Le titre doit contenir au moins 3 caractères").max(20, "Le titre doit contenir au maximum 35 caractères"),
    description: z.string().min(10, "La description doit contenir au moins 10 caractères").max(200, "La description doit contenir au maximum 200 caractères"),
    email: z.string().email("Veuillez entrer une adresse email valide"),
})

function FormContact() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            titre: '',
            description: '',
            email: '',
        },
    })


    const [sendEmailState, sendEmailAction] = useFormState(sendEmail,{
        error: null,
        success: false
    })
    useEffect(() => {
        if (sendEmailState.success) {
            alert('Votre message a bien été envoyé')
        }
        if (sendEmailState.error) {
            alert('Une erreur est survenue lors de l\'envoi de votre message')
        }
    },[sendEmailState])

    return (
        <Form {...form}>
        <form action= {sendEmailAction} className='space-y-8'>
            <FormField
            control={form.control}
            name='titre'
            render={({ field }) => (
                <FormItem>
                <FormLabel className='text-yellow-400'>Titre</FormLabel>
                <FormControl>
                    <Input placeholder='Titre' {...field} required/>
                </FormControl>
                <FormDescription className='text-white'>
                    Entrez le titre de votre message
                </FormDescription>
                <FormMessage/>
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name='description'
                render={({ field }) => (
                <FormItem>
                    <FormLabel className='text-yellow-400'>Description</FormLabel>
                    <FormControl>
                        <Textarea placeholder='Description' {...field} required/>
                    </FormControl>
                    <FormDescription className='text-white'>
                        Entrez la description de votre message
                    </FormDescription>
                    <FormMessage/>
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                <FormItem>
                    <FormLabel className='text-yellow-400'>Email</FormLabel>
                    <FormControl>
                        <Input placeholder='Email' {...field} required/>
                    </FormControl>
                    <FormDescription className='text-white'>
                        Entrez votre email
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
    )
}

export default FormContact