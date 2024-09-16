"use client"

import HeaderA from "@/components/header-administrateur"
import AsidebarA from "@/components/asidebarA"
import { auth } from "../auth"
import { NextResponse } from "next/server"


export default async function HomeAdmin() {
   /* const session = await auth()
    if (session && session?.user?.role !== "administrateur") {
        return NextResponse.json(
            { error: "Vous n'avez pas les droits pour accéder à cette page" },
            { status: 403 }
        )
    }*/

    return (
                <div className ="flex min-h-screen w-full flex-col bg-green-800">
                        <AsidebarA/>
                        <HeaderA/>
                        <main className="flex-1 p-4 justify-center">
                            <h1 className="text-6xl text-center font-semibold text-yellow-400">Espace Administrateur</h1>
                        </main>
                </div> 
    )
}