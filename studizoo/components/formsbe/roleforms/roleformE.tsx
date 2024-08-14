"use client"

import { updateRoleInDb } from "@/app/api/role/route"
import { roleSchema } from "@/lib/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


export default function RoleformE({params} : {params: {id:number}}) {

    const form = useForm<z.infer<typeof roleSchema>>({
        resolver: zodResolver(roleSchema),
        defaultValues: {
            nom: "",
        }
    })

    const handleSubmit = (data: z.infer<typeof roleSchema>) => {
        updateRoleInDb(Number(params.id), data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                    control={form.control}
                    name="nom"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-yellow-400'>Nom</FormLabel>
                            <FormControl>
                                <Input className="text-black" placeholder="Nom" {...field} />
                            </FormControl>
                            <FormDescription className='text-white'>
                                Modifiez le nom du role
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <br />
                <div className="flex h-full items-center justify-center p-6">
                    <Button type='submit'>Modifier</Button>
                </div>
            </form>
        </Form>
    )
}