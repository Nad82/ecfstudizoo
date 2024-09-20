"use client"

import axios from "axios"


export default async function Avis ({params} : {params: {id: number}}) {

    const avis = await axios.get('http://localhost:3000/api/avis/' + params.id)
    .then((res) => {
        return res.data
    })

    if (!avis) return <div>Loading...</div>

    return (
        <div>
            <h1>Avis des visiteurs</h1>
            <ul>
                {avis.map((avis: any) => (
                    <li key={avis.id}>
                        <div>{avis.nom}</div>
                        <div>{avis.commentaire}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}