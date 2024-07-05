import CarrouselServices from '@/components/carrousel-services'
import React from 'react'

export default function Services() {
    return (
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
                <li>Restauration</li>
                <li>Visite des habitats avec un guide</li>
                <li>Visite du zoo en petit train</li>
            </ul>
        </div>
    )
}
