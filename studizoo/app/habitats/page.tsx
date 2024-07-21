import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'

export default function Habitat() {
    return (
        <div>
        <Header />
        <div className='bg-green-800'>
            <div className='text-4xl text-yellow-400 text-center'>Les habitats</div>
            <br />
            <div className='text-2xl text-yellow-400'>Découvrez les habitats du zoo Arcadia</div>
            <br />
        </div>
        <Footer />
        </div>
    )
}
