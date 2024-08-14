"use client"

import { createHabitatInDb } from "@/app/api/habitat/route"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { habitatSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"



export default function HabitatFormC (){

    const form = useForm<z.infer<typeof habitatSchema>>({
        resolver: zodResolver(habitatSchema),
        defaultValues :{
            nom:"",
            description:""
        }
    })

    const handleSubmit = (data:z.infer<typeof habitatSchema>) => {
        createHabitatInDb(data)
    }

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                control={form.control}
                name="nom"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Nom</FormLabel>
                        <FormControl>
                            <Input className="text-black" placeholder="Nom" {...field}/>
                        </FormControl>
                        <FormDescription className='text-white'>
                            Entrez le nom de l'habitat
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="description"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Description</FormLabel>
                        <FormControl>
                            <Textarea className="text-black" placeholder="Description" {...field}/>
                        </FormControl>
                        <FormDescription className='text-white'>
                            Entrez la description de l'habitat
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <Button type="submit" >Créer</Button>
            </form>
        </Form>
    )
}