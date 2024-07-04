import React from 'react'
import FormContact from '@/components/formContact'


export default function Contact() {

    return (
        <div className="bg-green-800">
            <h1 className='text-4xl text-yellow-400 text-center'>Contactez-nous</h1>
            <br />
            <br />
            <p className='text-lg text-white'>Nous sommes à votre écoute!</p>
            <p className='text-lg text-white'>Vous avez une question? N'hésitez pas à nous contacter par le biais de ce formulaire.</p>
            <br />
            <br />
                <FormContact />
        
        </div>

    )
}
