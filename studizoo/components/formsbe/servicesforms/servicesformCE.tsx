"use client"

import { createServicesInDbE } from "@/app/api/servicess/route"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { servicesSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { SendHorizontal } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"


export default function ServicesFormCE(){
    const form = useForm<z.infer<typeof servicesSchema>>({
        resolver: zodResolver(servicesSchema),
        defaultValues :{
            nom:"",
            description:""
        }
    })
    const handleSubmit = (data:z.infer<typeof servicesSchema>) => {
        createServicesInDbE(data)
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
                            Entrez le nom du service
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
                            Entrez la description du service
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <br />
                <div className="flex h-full items-center justify-center p-6">
                    <Button type='submit'><SendHorizontal/>Créer</Button>
                </div>
            </form>
        </Form>
    )
}
        