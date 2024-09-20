"use server"

import { db} from "@/lib/db";
import { animalSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { z } from "zod";



export const getAllAnimalFromDb = async () => {
    try{
        const animals = await db.animal.findMany({
            relationLoadStrategy: 'query',
            include: {
                habitat: {
                    select: {
                        nom: true
                    }
                },
                image_animal: {
                    select: {
                        nom: true
                    }
                },
                compte_rendu: true,
                consommation_animal: {
                    select: {
                        id: true
                    }
                }
            }}
        );
        return animals
    }
    catch (error){
        console.log(`Error at getAnimalFromDb: ${error}`)
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la récupération des animaux" },
            { status: 500}
        )
    }
}

export const getAnimalFromDb = async (id: number) => {
    try{
        const animalId = await db.animal.findFirst({
            relationLoadStrategy: 'query',
            where: {
                id: id
            },
            include: {
                habitat: {
                    select: {
                        nom: true
                    }
                },
                image_animal: {
                    select: {
                        nom: true
                    }
                },
                compte_rendu: true,
                consommation_animal: {
                    select: {
                        id: true
                    }
                }
            }
        })
        return animalId
    }
    catch (error){
        console.log(`Error at getAnimalFromDb: ${error}`)
        return null
    }
}


export const createAnimalInDb = async (animal:z.infer<typeof animalSchema>) => {

    try {
        await db.animal.create({
            data: animal,
            include: {
                habitat: {
                    select: {
                        nom: true
            }
        },
        image_animal: {
            select: {
                nom: true
            }
        },
        compte_rendu: {
            select: {
                id: true
            }
        },
        consommation_animal: {
            select: {
                id: true
            }
        }
    }
    })
    } catch (error) {
        console.error(`Error at createAnimalInDb: ${error}`)
        throw error;
    }
    revalidatePath("/administrateur/adminAnimal",'page');
    redirect("/administrateur/adminAnimal")
}

export const updateAnimalInDb = async (id: number, animal:z.infer<typeof animalSchema>) => {
    try{
        await db.animal.update({
            relationLoadStrategy: 'query',
            where: {
                id: id
            },
            data: animal,
            include: {
                habitat: {
                    select: {
                        nom: true
                    }
                },
                image_animal: {
                    select: {
                        nom: true
                    }
                },
                compte_rendu: true,
                consommation_animal: {
                    select: {
                        id: true
                    }
                }
            }
        })
    }
    catch (error){
        console.log(`Error at updateAnimalInDb: ${error}`)
        return {error:"Une erreur est survenue lors de la mise à jour de l'animal"}
    }
    revalidatePath("/administrateur/adminAnimal",'page');
    redirect("/administrateur/adminAnimal")
}

export const deleteAnimalInDb = async (id: number) => {
    try{
        await db.animal.delete({
            relationLoadStrategy: 'query',
            where: {
                id: id
            },
            include: {
                habitat:true,
                image_animal:true,
                consommation_animal: true,
                compte_rendu: true
            }
        })
    }
    catch (error){
        console.log(`Error at deleteAnimalInDb: ${error}`)
        return null
    }
    revalidatePath("/administrateur/adminAnimal",'page');
    redirect("/administrateur/adminAnimal")
}