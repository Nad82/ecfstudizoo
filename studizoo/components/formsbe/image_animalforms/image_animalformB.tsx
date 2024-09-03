'use client';

import { Button } from '@/components/ui/button';
import { type PutBlobResult } from '@vercel/blob';
import { upload } from '@vercel/blob/client';
import { useState, useRef } from 'react';



export default function ImageAnimalformB() {

    const inputFileRef = useRef<HTMLInputElement>(null);

    const [blob, setBlob] = useState<PutBlobResult | null>(null);
    
    return (
    <>
        <h1 className=' text-yellow-400'>Télécharger une image d'un animal</h1>
        <br />
        <form
            onSubmit={async (event) => {
                event.preventDefault();

                if (!inputFileRef.current?.files) {
                    throw new Error('No file selected');
                }
                const file = inputFileRef.current.files[0];
                const newBlob = await upload(file.name, file, {
                    access: 'public',
                    handleUploadUrl: '/api/upload',
                });
                setBlob(newBlob);
            }
        }
            className='flex space-x-4'
        >
            <input name="file" ref={inputFileRef} type="file" required />
            <Button type="submit">Télécharger</Button>
            <br />
            <br />
            
        </form>

        {blob && (
            <div>
                Blob url: <a href={blob.url}>{blob.url}</a>
            </div>
        )}
    </>
    );
}