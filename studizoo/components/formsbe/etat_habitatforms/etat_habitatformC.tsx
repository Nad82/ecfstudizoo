"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { etat_habitatSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { SendHorizonal } from "lucide-react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getAllHabitatFromDb } from "@/app/actions/habitat"
import { createEtatHabitatInDb } from "@/app/actions/etat_habitat"


export default function EtatHabitatFormC(){

    const form = useForm<z.infer<typeof etat_habitatSchema>>({
        resolver: zodResolver(etat_habitatSchema),
        defaultValues :{
            commentaires:"",
            amelioration: false,
            habitatId:1
        }
    })

    const [habitats, setHabitats] = useState<{ id: number; nom: string |null; description: string |null; }[] | null>(null);

    useEffect(() => {
        async function fetchHabitats() {
            const data = await getAllHabitatFromDb();
            setHabitats(data);
        }
        fetchHabitats();
    }
    ,[])

    const handleSubmit = (data:z.infer<typeof etat_habitatSchema>) => {
        createEtatHabitatInDb(data)
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
                            Entrez les commentaires sur l'état de l'habitat
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
                            Entrez si l'amélioration est nécessaire
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="habitatId"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Habitat</FormLabel>
                        <FormControl>
                        <Select  
                            onValueChange={(value) => field.onChange(Number(value))}
                            defaultValue={String(field.value)}
                        >
                            <SelectTrigger className="text-black">
                                        <SelectValue className="text-black" placeholder= 'Selectionner un habitat'/>
                                    </SelectTrigger>
                                    <SelectContent className="text-black">
                                        <SelectGroup>
                                            <SelectLabel className="text-black">Choisissez le nom de l'habitat</SelectLabel>
                                            {habitats?.map((habitat) => (
                                                <SelectItem className="text-black" key={habitat.id} value={String(habitat.id)}>
                                                    {habitat.nom?? 'Pas de nom'}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                        </FormControl>
                        <FormDescription className='text-white'>
                            Entrez le nom de l'habitat
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <Button type="submit" ><SendHorizonal/> Créer</Button>
            </form>
        </Form>
    )
}