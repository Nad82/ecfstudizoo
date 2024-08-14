"use client"

import { createUserInDb } from "@/app/api/user/route"
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
import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"


export default function UserformC(){
    const form= useForm<z.infer<typeof userSchema>>({
        resolver: zodResolver(userSchema),
        defaultValues:{
            email:"",
            password:"",
            email_verified:new Date(),
            created_at:new Date(),
            role_id:0
        }
    })
    const handleSubmit = (data:z.infer<typeof userSchema>) => {
        createUserInDb(data)
    }

    const [date, setDate] = React.useState<Date>(new Date());

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
                            Entrez l'email de l'utilisateur
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
                            Entrez le mot de passe de l'utilisateur
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
                                        {date ? format (date, "PPP HH:mm") : <span>Entrez la date et l'heure de vérification de l'email</span>}
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
                            Entrez si l'email de l'utilisateur est vérifié
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name= "created_at"
                render={({field})=>(
                    <FormItem>
                        <FormLabel className='text-yellow-400'>Créé le</FormLabel>
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
                                        {date ? format (date, "PPP HH:mm") : <span>Entrez la date et l'heure de la création de l'utilisateur</span>}
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
                            Entrez la date de création de l'utilisateur
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
                            <Input type='number'className="text-black" placeholder="Role"{...field} onChange={event => field.onChange(+event.target.value)}/>
                        </FormControl>
                        <FormDescription className='text-white'>
                            Entrez le role de l'utilisateur
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