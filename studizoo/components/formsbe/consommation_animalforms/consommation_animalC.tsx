"use client"

import { createConsommationAnimalInDb } from "@/app/api/consommation_animal/route"
import { Button } from "@/components/ui/button"
import { DatetimePicker } from "@/components/ui/date-time-picker"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { consommation_animalSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getAllAnimalFromDb } from "@/app/api/animal/route"


export default function ConsommationAnimalformC() {
    const form=useForm<z.infer<typeof consommation_animalSchema>>({
        resolver:zodResolver(consommation_animalSchema),
        defaultValues:{
            nourriture:"",
            quantite:0,
            heure:new Date(),
            animalId:1
        }
    })

    const [date, setDate] = React.useState<Date>(new Date());

    const [animals, setAnimals] = React.useState<{ id: number; prenom: string |null; }[] | null>(null);
    
    useEffect(() => {
        async function fetchAnimals() {
            const data = await getAllAnimalFromDb();
            setAnimals(data);
        }
        fetchAnimals();
    }
    ,[])

    const handleSubmit=(data:z.infer<typeof consommation_animalSchema>)=>{
        createConsommationAnimalInDb(data)
    }
    

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
                            Entrez la nourriture de l'animal
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
                            Entrez la quantité de nourriture
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
                <FormField
                control={form.control}
                name="animalId"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Nom de l'animal</FormLabel>
                        <FormControl>
                            <Select
                                onValueChange={(value) => field.onChange(Number(value))}
                                defaultValue={String(field.value)}
                            >
                                <SelectTrigger className="text-black">
                                    <SelectValue className="text-black" placeholder= 'Selectionner un animal'/>
                                </SelectTrigger>
                                <SelectContent className="text-black">
                                    <SelectGroup>
                                        <SelectLabel className="text-black">Choisissez le nom de l'animal</SelectLabel>
                                        {animals?.map((animal) => (
                                            <SelectItem className="text-black" key={animal.id} value={String(animal.id)}>
                                                {animal.prenom?? 'Pas de nom'}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </FormControl>
                        <FormDescription className='text-white'>
                            Entrez le nom de l'animal
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <Button type="submit" className="bg-yellow-400">Ajouter</Button>
            </form>
        </Form>
    )
}