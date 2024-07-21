import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'

export default function Mentionslegales() {
    return (
        <div>
        <Header />
        <div className="bg-green-800">
            <h1 className="text-4xl text-yellow-400 text-center">Mentions légales</h1>
            <br />
            <br />
            <p className="text-lg text-white ">
                Conformément aux dispositions des articles 6-III et 19 de la loi pour la Confiance dans l'économie numérique, nous vous informons que :
                <br />
                Ce site est édité par : DevSoft
                <br />
                Adresse : 5 rue des animaux 56000 Arcadia
                <br />
                Téléphone : 02 97 97 97 97
                <br />
                Adresse mail : devsoft@hotmail.com
                <br />
                Le directeur de la publication est : Mbaka Tapedah Nadège
                <br />
                Ce site est hébergé par : Netlify
                <br />
                Adresse : 123 rue des serveurs 75000 Paris
                <br />
                Téléphone : 01 01 01 01 01
            </p>
            <br />
        </div>
        <Footer />
        </div>
    )
}
