"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { image_animalSchema } from '@/lib/zod';
import { createImageAnimalInDb } from '@/app/api/image_animal/route';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';


export default function ImageAnimalformC() {
    const form = useForm<z.infer<typeof image_animalSchema>>({
        resolver: zodResolver(image_animalSchema),
        defaultValues :{
            blob:""
        }
    })

const handleSubmit = (data:z.infer<typeof image_animalSchema>) => {
    createImageAnimalInDb(data)
}

return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
            control={form.control}
            name="blob"
            render={({field})=>(
                <FormItem>
                    <FormLabel className='text-yellow-400'>Blob de l'image</FormLabel>
                    <FormControl>
                        <Input className="text-black" placeholder="Blob de l'image" {...field}/>
                    </FormControl>
                    <FormDescription className='text-white'>
                        Entrez le blob de l'image
                    </FormDescription>
                    <FormMessage/>
                </FormItem>
            )}
            />
            <button type="submit">Envoyer</button>
        </form>
    </Form>
)
}
