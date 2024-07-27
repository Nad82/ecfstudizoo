"use client"

import { horairesSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"


export default function HorairesFormU(){
    const form = useForm<z.infer<typeof horairesSchema>>({
        resolver: zodResolver(horairesSchema),
        defaultValues :{
            description:""
        }
    })
    async function onSubmit(values: z.infer<typeof horairesSchema>){
        console.log(values)
    }
    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                control={form.control}
                name="description"
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                            <Input placeholder="Description" {...field}/>
                        </FormControl>
                        <FormDescription>
                            Entrez les horaires du zoo
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