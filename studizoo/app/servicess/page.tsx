"use client"

import CarrouselServices from '@/components/carrousel-services'
import Footer from '@/components/footer'
import Header from '@/components/header'
import axios from 'axios'


export default async function Services() {
    const services = await axios.get('http://localhost:3000/api/servicess')
    .then((res) => {
        return res.data
    })

    if (!services) return <div>Loading...</div>

    return (
        <div>
        <Header />
        <div className='bg-green-800 justify-items-center'>
            <div className='text-4xl text-yellow-400 text-center'>Les services</div>
            <br />
            <div className='text-2xl text-yellow-400'>Découvrez les services du zoo Arcadia</div>
            <br />
            <div className='flex justify-center'>
                <div>
                <CarrouselServices />
                </div>
            </div>
            <br />
            <div className='text-lg text-white'>
                Le zoo Arcadia dispose de plusieurs services afin de vous garantir une visite agréable et enrichissante.
            </div>
            <br />
            <ul>
                {services.map((service: any) => (
                    <li key={service.id}>
                        <div className='text-2xl text-yellow-400'>{service.nom}</div>
                        <div className='text-lg text-white'>{service.description}</div>
                        <br />
                    </li>
                ))}
            </ul>
        </div>
        <Footer />
        </div>
    )
}
