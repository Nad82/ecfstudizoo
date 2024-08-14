"use client"

import { updateConsommationAnimalInDb } from "@/app/api/consommation_animal/route";
import { Button } from "@/components/ui/button";
import { DatetimePicker } from "@/components/ui/date-time-picker";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { consommation_animalSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";



export default function ConsommationAnimalformE({params} : {params: {id:number}}){
    const form=useForm<z.infer<typeof consommation_animalSchema>>({
        resolver:zodResolver(consommation_animalSchema),
        defaultValues:{
            nourriture:"",
            quantite:0,
            heure:new Date(),
        }
    })
    const handleSubmit=(data:z.infer<typeof consommation_animalSchema>)=>{
        updateConsommationAnimalInDb(Number(params.id), data)
    }
    const [date, setDate] = React.useState<Date>(new Date());

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                control={form.control}
                name="nourriture"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Nourriture</FormLabel>
                        <FormControl>
                            <Input className="text-black" placeholder="Nourriture" {...field}/>
                        </FormControl>
                        <FormDescription className='text-white'>
                            Modifiez la nourriture de l'animal
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="quantite"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Quantité</FormLabel>
                        <FormControl>
                            <Input type= "number" className="text-black" placeholder="Quantité" {...field} onChange={event => field.onChange(+event.target.value)}/>
                        </FormControl>
                        <FormDescription className='text-white'>
                            Modifiez la quantité de nourriture
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="heure"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Heure</FormLabel>
                        <FormControl>
                            <DatetimePicker
                            selected={date}
                            setDate={setDate}
                            initialFocus
                            />
                        </FormControl>
                        <FormDescription className='text-white'>
                            Modifiez l'heure de la consommation
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <Button>Modifier</Button>
            </form>
        </Form>
    )
}