"use client"

import { horairesSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { createHorairesInDb } from "@/app/actions/horaires"
import { SendHorizontal } from "lucide-react"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"



export default function HorairesFormC(){
    const form = useForm<z.infer<typeof horairesSchema>>({
        resolver: zodResolver(horairesSchema),
        defaultValues :{
            description:""
        }
    })
    const handleSubmit = (data:z.infer<typeof horairesSchema>) => {
        createHorairesInDb(data)
    }

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
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
                            Entrez les horaires du zoo
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