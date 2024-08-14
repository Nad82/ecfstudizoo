"use client"

import { horairesSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { updateHorairesInDb } from "@/app/api/horaires/route"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"


export default function HorairesFormU ({params} : {params: {id:number}}) { 

    const form = useForm<z.infer<typeof horairesSchema>>({
        resolver: zodResolver(horairesSchema),
        defaultValues :{
            description:""
        }
})
const handleSubmit = (data:z.infer<typeof horairesSchema>) => {
    updateHorairesInDb(Number(params.id), data)
}

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                control={form.control}
                name="description"
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                            <Textarea className="text-black" placeholder="Description" {...field}/>
                        </FormControl>
                        <FormDescription>
                            Modifiez les horaires du zoo
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