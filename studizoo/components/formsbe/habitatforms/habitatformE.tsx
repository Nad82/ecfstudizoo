"use client"

import { updateHabitatInDb } from "@/app/actions/habitat"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { habitatSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"



export default function HabitatFormE({params} : Readonly<{params: {id:number}}>){

    const form = useForm<z.infer<typeof habitatSchema>>({
        resolver: zodResolver(habitatSchema),
        defaultValues :{
            nom:"",
            description:""
        }
    })
    const handleSubmit = (data:z.infer<typeof habitatSchema>) => {
        updateHabitatInDb(Number(params.id), data)
    }

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                control={form.control}
                name="nom"
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                            <Input className="text-black" placeholder="Nom" {...field}/>
                        </FormControl>
                        <FormDescription>
                            Modifiez le nom de l'habitat
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
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                            <Textarea className="text-black" placeholder="Description" {...field}/>
                        </FormControl>
                        <FormDescription>
                            Modifiez la description de l'habitat
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