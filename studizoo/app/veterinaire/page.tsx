import AsidebarV from "@/components/asidebarV"
import HeaderV from "@/components/header-veterinaire"
import { auth } from "../auth"
import { SessionProvider } from "next-auth/react"

export default async function HomeVeterinaire() {
    const session = await auth()
    if (session && session?.user?.role !== "Veterinaire") {
        session.user ={
            id: session.user.id,
            email:session.user.email,
            password:session.user.password,
            role:session.user.role,
            created_at:session.user.created_at,
            updated_at:session.user.updated_at,
            email_verified:session.user.email_verified
        }
    }
    return (
        <SessionProvider basePath={"../auth"} session={session}>
            <div className ="flex min-h-screen w-full flex-col  bg-green-800">
                <AsidebarV/>
                <HeaderV/>
                <main className="flex-1 p-4 justify-center">
                    <h1 className="text-6xl text-center font-semibold text-yellow-400">Espace Vétérinaire</h1>
                </main>
            </div>
        </SessionProvider>
    )
}