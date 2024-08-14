"use client"

import { createCompteRenduInDb } from "@/app/api/compte_rendu/route"
import { Button } from "@/components/ui/button"
import { DatetimePicker } from "@/components/ui/date-time-picker"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { compte_renduSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon, SendHorizontal } from "lucide-react"
import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"


export default function CompteRenduFormC(){
    const form = useForm<z.infer<typeof compte_renduSchema>>({
        resolver: zodResolver(compte_renduSchema),
        defaultValues :{
            etat:"",
            nourriture:"",
            quantite_nourriture: 0,
            heure_passage:new Date(),
        }
    })
    const handleSubmit = (data:z.infer<typeof compte_renduSchema>) => {
        createCompteRenduInDb(data)
    }
    const [date, setDate] = React.useState<Date>(new Date());

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                control={form.control}
                name="etat"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Etat</FormLabel>
                        <FormControl>
                            <Input className="text-black" placeholder="Etat" {...field}/>
                        </FormControl>
                        <FormDescription className='text-white'>
                            Entrez l'état de l'animal
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
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
                            Entrez la nourriture de l'animal
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="quantite_nourriture"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Quantité de nourriture</FormLabel>
                        <FormControl>
                            <Input type="number" className="text-black" placeholder="Quantité de nourriture" {...field} onChange={event => field.onChange(+event.target.value)}/>
                        </FormControl>
                        <FormDescription className='text-white'>
                            Entrez la quantité de nourriture de l'animal
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="heure_passage"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Heure de passage</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                            <FormControl>
                                <Button 
                                    variant={"outline"}
                                    className={cn(
                                        "w-[240px] pl-3 text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                    >
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                                        {date ? format (date, "PPP HH:mm") : <span>Entrez la date et l'heure</span>}
                                </Button>
                            </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <DatetimePicker
                                selected={date}
                                setDate={setDate}
                                initialFocus
                            />
                            </PopoverContent>
                        </Popover>
                        <FormDescription className='text-white'>
                            Entrez l'heure de passage 
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <Button type='submit' className='item-center'><SendHorizontal/>Créer</Button>
            </form>
        </Form>
    )
}