"use client"

import { updateUserInDb } from "@/app/api/user/route"
import { Button } from "@/components/ui/button"
import { DatetimePicker } from "@/components/ui/date-time-picker"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { userSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon, SendHorizontal } from "lucide-react"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getAllRoleFromDb } from "@/app/api/role/route"


export default function UserformE ({params} : {params: {id:number}}){

    const form = useForm<z.infer<typeof userSchema>>({
        resolver: zodResolver(userSchema),
        defaultValues :{
            email:"",
            password:"",
            email_verified:new Date(),
            updated_at: new Date(),
            role_id:0
        }
    })

    const [date, setDate] = React.useState<Date>(new Date());
    const [roles, setRoles] = React.useState<{ id: number; nom: string |null; }[] | null>(null);

    useEffect(() => {
        async function fetchRole() {
            const data = await getAllRoleFromDb();
            setRoles(data);
        }
        fetchRole();
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
                name= "password"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Mot de passe</FormLabel>
                        <FormControl>
                            <Input className="text-black" placeholder="Mot de passe"{...field}/>
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
                name= "email_verified"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Email vérifié</FormLabel>
                        <FormControl>
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
                                        {date ? format (date, "PPP HH:mm") : <span>Modifiez la date et l'heure de vérification de l'email</span>}
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
                        </FormControl>
                        <FormDescription className='text-white'>
                            Modifiez si l'email de l'utilisateur est vérifié
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name= "updated_at"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Modifié le</FormLabel>
                        <FormControl>
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
                                        {date ? format (date, "PPP HH:mm") : <span>Entrez la date et l'heure de la modification de l'utilisateur</span>}
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
                        </FormControl>
                        <FormDescription className='text-white'>
                            Entrez la date de modification de l'utilisateur
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name= "role_id"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Role</FormLabel>
                        <FormControl>
                            <Select
                                onValueChange={(value) => field.onChange(Number(value))}
                                defaultValue={String(field.value)}
                            >
                                <SelectTrigger className="text-black">
                                    <SelectValue className="text-black" placeholder= 'Selectionner un rôle pour un utilisateur'/>
                                </SelectTrigger>
                                <SelectContent className="text-black">
                                    <SelectGroup>
                                        <SelectLabel className="text-black">Modifiez le role de l'utilisateur</SelectLabel>
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
                            Modifiez le role de l'utilisateur
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <br />
                <div className="flex h-full items-center justify-center p-6">
                    <Button type='submit' className='item-center'><SendHorizontal/>Créer</Button>
                </div>
            </form>
        </Form>
    )
}