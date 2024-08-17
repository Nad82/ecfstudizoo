"use server"

import { db } from "@/lib/db";
import { image_animalSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { NextResponse } from 'next/server';
import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';


export const getAllImageAnimalFromDb = async () => {
    try {
        const imageAnimal = await db.image_animal.findMany();
        return imageAnimal
    } catch (error) {
        console.log(`Error at getAllImageAnimalFromDb: ${error}`)
        return null
    }
}

export const getImageAnimalFromDb = async (id: number) => {
    try {
        const imageAnimal = await db.image_animal.findFirst({
            where: {
                id: id
            }
        })
        return imageAnimal
    }
    catch (error) {
        console.log(`Error at getImageAnimalFromDb: ${error}`)
        return null
    }
}

export async function POST(request: Request): Promise<NextResponse> {
    const body = (await request.json()) as HandleUploadBody;

    try {
        const jsonResponse = await handleUpload({
        body,
        request,
        onBeforeGenerateToken: async (
            pathname,
          /* clientPayload */
        ) => {
          // Generate a client token for the browser to upload the file
          // ⚠️ Authenticate and authorize users before generating the token.
          // Otherwise, you're allowing anonymous uploads.

            return {
                allowedContentTypes: ['image/jpeg', 'image/png', 'image/gif'],
                tokenPayload: JSON.stringify({
                // optional, sent to your server on upload completion
                // you could pass a user id from auth, or a value from clientPayload
            }),
            };
        },
        onUploadCompleted: async ({ blob, tokenPayload }) => {
          // Get notified of client upload completion
          // ⚠️ This will not work on `localhost` websites,
          // Use ngrok or similar to get the full upload flow

            console.log('blob upload completed', blob, tokenPayload);

            try {
            // Run any logic after the file upload completed
            // const { userId } = JSON.parse(tokenPayload);
            // await db.update({ avatar: blob.url, userId });
            } catch (error) {
                throw new Error('Could not update user');
            }
        },
        });

        return NextResponse.json(jsonResponse);
    } catch (error) {
        return NextResponse.json(
        { error: (error as Error).message },
        { status: 400 }, // The webhook will retry 5 times waiting for a 200
        );
    }

}

export const createImageAnimalInDb = async (imageAnimal: z.infer<typeof image_animalSchema>) => {
    try {
        await db.image_animal.create({
            data: imageAnimal
        })
    } catch (error) {
        console.log(`Error at createImageAnimalInDb: ${error}`)
        return { error: "Une erreur est survenue lors de la création de l'image animal" }
    }
    revalidatePath("/administrateur/adminAnimal", 'page');
    redirect("/administrateur/adminAnimal")
}


export const updateImageAnimalInDb = async (id: number, imageAnimal:z.infer<typeof image_animalSchema>) => {
    try {
        await db.image_animal.update({
            where: {
                id: id
            },
            data: imageAnimal
        })
    } catch (error) {
        console.log(`Error at updateImageAnimalInDb: ${error}`)
        return { error: "Une erreur est survenue lors de la mise à jour de l'image animal" }
    }
    revalidatePath("/administrateur/adminAnimal", 'page');
    redirect("/administrateur/adminAnimal")
}

export const deleteImageAnimalInDb = async (id: number) => {
    try {
        await db.image_animal.delete({
            where: {
                id: id
            }
        })
    } catch (error) {
        console.log(`Error at deleteImageAnimalInDb: ${error}`)
        return { error: "Une erreur est survenue lors de la suppression de l'image animal" }
    }
    revalidatePath("/administrateur/adminAnimal", 'page');
    redirect("/administrateur/adminAnimal")
}

