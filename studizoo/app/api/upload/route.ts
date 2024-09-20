"use server"

import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";


export const POST = async (req: NextRequest) => {
    const formData = await req.formData();

    const file = formData.get("file") as File;
    if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "Aucun fichier n'a été trouvé" },
        { status: 400 });
    }
    const buffer = Buffer.from(await file.arrayBuffer())
    const filename = file.name; 
    console.log(`filename: ${filename}`)
    
    try {
        await writeFile(
            path.join(process.cwd(), '/public/images', filename),
            buffer
        )
        return NextResponse.json({ Message: "Success", status: 201 })
    } catch (error) {
        return NextResponse.json(
            { error: "Une erreur est survenue lors de l'enregistrement de l'image" },
            { status: 500 }
        )
    }
};

