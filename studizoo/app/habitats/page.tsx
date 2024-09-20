
import Footer from '@/components/footer'
import Header from '@/components/header'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'


export default async function Habitatshome() {

    const ImageHabitats = await axios.get('http://localhost:3000/api/image_habitat',{
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => {
        return res.data
    })

    const data = ImageHabitats.map((image_habitat: any) => ({
        id: image_habitat.id,
        nom: image_habitat.nom,
    }))

    return (
        <div>
        <Header />
        <div className='bg-green-800'>
            <div className='text-4xl text-yellow-400 text-center'>Les habitats</div>
            <br />
            <div className='text-2xl text-yellow-400'>Découvrez les habitats du zoo Arcadia</div>
            <br />
            <ul>
                {data.map((image_habitat: any) => (
                    <li key={image_habitat.id}>
                        <Image  src={`http://localhost/public/images/${image_habitat.nom}`} alt="image habitat zoo" width={50} height={50} />
                        <br />
                    </li>
                ))}
            </ul>
        </div>
        <Footer />
        </div>
    )
}
