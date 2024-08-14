"use client"

import { updateEtatHabitatInDb } from "@/app/api/etat_habitat/route"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { etat_habitatSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { SendHorizontal } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"



export default function EtatHabitatFormE({params}: {params:{id: number}}) {

    const form= useForm<z.infer<typeof etat_habitatSchema>>({
        resolver: zodResolver(etat_habitatSchema),
        defaultValues:{
            commentaires: "",
            amelioration: false,
        }
    })

    const handleSubmit = (data: z.infer<typeof etat_habitatSchema>) => {
        updateEtatHabitatInDb(Number(params.id), data)
    }

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                control={form.control}
                name="commentaires"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Commentaires</FormLabel>
                        <FormControl>
                            <Textarea className="text-black" placeholder="Commentaires" {...field}/>
                        </FormControl>
                        <FormDescription className='text-white'>
                            Modifiez les commentaires sur l'état de l'habitat
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="amelioration"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Amélioration</FormLabel>
                        <FormControl>
                        <Switch
                            id="amelioration"
                            checked={field.value}
                            onCheckedChange={field.onChange}

                        />
                        </FormControl>
                        <FormDescription className='text-white'>
                            Modifiez si l'amélioration est nécessaire
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <Button type="submit" ><SendHorizontal/> Modifier</Button>
            </form>
        </Form>
    )
}