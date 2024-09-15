"use client"

import { updateUserInDb } from "@/app/api/user/route";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {userSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getAllRoleFromDb } from "@/app/api/role/route";
import React, { useEffect, useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { DatetimePicker } from "@/components/ui/date-time-picker";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, Select } from "@/components/ui/select";



export default function UserformE({params} : {params: {id:number}}) {
    
        const form = useForm<z.infer<typeof userSchema >>({
            resolver: zodResolver(userSchema),
            defaultValues: {
                email: "",
                password: "",
                email_verified: new Date(),
                created_at: new Date(),
                updated_at: new Date(),
                role_id: 1
            }
        })
    
        const [date, setDate] = React.useState<Date>(new Date());
    
        const [roles, setRoles] = useState<{ id: number; nom: string |null; }[] | null>(null);
    
        useEffect(() => {
            async function fetchRoles() {
                const data = await getAllRoleFromDb();
                setRoles(data);
            }
            fetchRoles();
        }
        ,[])
    
        const handleSubmit = (data:z.infer<typeof userSchema>) => {
            updateUserInDb(Number(params.id), data)
        }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                control={form.control}
                name="email"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Email</FormLabel>
                        <FormControl>
                            <Input className="text-black" placeholder="Email" {...field}/>
                        </FormControl>
                        <FormDescription className='text-white'>
                            Modifiez l'email de l'utilisateur
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="password"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Password</FormLabel>
                        <FormControl>
                            <Input className="text-black" placeholder="Password" type="Password" {...field}/>
                        </FormControl>
                        <FormDescription className='text-white'>
                            Modifiez le mot de passe de l'utilisateur
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="email_verified"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Email vérifié</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                            <FormControl>
                                <Button 
                                    variant={"secondary"}
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
                            />
                            </PopoverContent>
                        </Popover>
                        <FormDescription className='text-white'>
                            Entrez la date de vérification de l'email
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="updated_at"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Date de la mise à jour</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                            <FormControl>
                                <Button 
                                    variant={"secondary"}
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
                            />
                            </PopoverContent>
                        </Popover>
                        <FormDescription className='text-white'>
                            Entrez la date de mise à jour de l'utilisateur
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="role_id"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Rôle</FormLabel>
                        <FormControl>
                        <Select
                                onValueChange={(value) => field.onChange(Number(value))}
                                defaultValue={String(field.value)}
                            >
                                <SelectTrigger className="text-black">
                                        <SelectValue className="text-black" placeholder= 'Selectionner un rôle'/>
                                    </SelectTrigger>
                                    <SelectContent className="text-black">
                                        <SelectGroup>
                                            <SelectLabel className="text-black">Choisissez un rôle</SelectLabel>
                                            {roles?.map((role) => (
                                                <SelectItem className="text-black" key={role.id} value={String(role.id)}>
                                                    {role.nom?? 'Pas de nom'}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                            </Select>
                        </FormControl>
                        <FormDescription className='text-white'>
                            Entrez le rôle de l'utilisateur
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <Button type='submit' className='flex justify-items-center'>Modifier l'utilisateur</Button>
            </form>
        </Form>
    )
}
