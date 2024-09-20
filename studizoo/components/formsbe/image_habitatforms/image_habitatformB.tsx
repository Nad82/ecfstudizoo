"use client"

import axios from 'axios';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ImageHabitatformB() {

    const inputFileRef = useRef<HTMLInputElement>(null);
    const [blob, setBlob] = useState<{ url: string } | null>(null);
    const [filename, setFilename] = useState<string>('');
    
    return (
    <>
        <h1 className=' text-yellow-400'>Télécharger une image d'un habitat</h1>
        <br />
        <form
            onSubmit={async (event) => {
                event.preventDefault();

                if (!inputFileRef.current?.files) {
                    throw new Error('Pas de fichier trouvé');
                }
                const file = inputFileRef.current.files[0];
                const formData = new FormData();
                formData.append('file', file);

                try{
                    const response = await axios.post('/api/upload', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });
                    console.log(`filename: ${filename}`)
                    setBlob({ url: URL.createObjectURL(file) });
                    setFilename(response.data.filename);
                } catch (error) {
                    console.error(error);
                }
        }}
            className='flex space-x-4'
        >
            <input name="file" ref={inputFileRef} type="file" required />
            <Button type="submit">Télécharger</Button>
            <br />
            <br /> 
        </form>

        {blob && (
            <div>
                <Image
                    src={blob.url}
                    width={40}
                    height={40}
                    alt="Image téléchargée" 
                />
            </div>
        )}
        {blob && (
            <div>
                Blob url: <a href={blob.url}>{blob.url}</a>
            </div>
        )}
        {filename && (
            <div>
                Nom du fichier: {filename}
            </div>
        )}
    </>
    );
}