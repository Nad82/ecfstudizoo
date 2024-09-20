"use client"

import { updateImageHabitatInDb } from "@/app/actions/image_habitat";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { getAllHabitatFromDb } from "@/app/actions/habitat";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { image_habitatSchema } from "@/lib/zod";



export default function ImageHabitatformE({params}: Readonly<{params: {id: number}}>) {
    const form = useForm<z.infer<typeof image_habitatSchema>>({
        resolver: zodResolver(image_habitatSchema),
        defaultValues: {
            url:"",
            habitatId: 1
        }
    })

    const [habitats, setHabitats] = useState<{ id: number; nom: string |null}[] | null>(null);

    useEffect(() => {
        async function fetchHabitats() {
            const data = await getAllHabitatFromDb();
            setHabitats(data);
        }
        fetchHabitats();
    }
    ,[])
    const handleSubmit = (data: z.infer<typeof image_habitatSchema>) => {
        updateImageHabitatInDb(params.id, data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                    control={form.control}
                    name="url"
                    render= {({ field}) => (
                        <FormItem>
                            <FormLabel className='text-yellow-400'>Url</FormLabel>
                            <FormControl>
                                <Input className="text-black" placeholder="Url" {...field} />
                            </FormControl>
                            <FormDescription className='text-white'>
                                Entrez l'Url de l'image
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="habitatId"
                    render= {({ field}) => (
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
                                Sélectionnez l'habitat
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">
                    Modifier
                </Button>
            </form>
        </Form>
    )
}