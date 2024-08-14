import HeaderA from "@/components/header-administrateur"
import AsidebarA from "@/components/asidebarA"

export default function HomeAdmin() {
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