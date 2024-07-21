import AsidebarE from "@/components/asidebarE"
import HeaderE from "@/components/header-employe"

export default function HomeEmploye() {
    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <AsidebarE/>
            <HeaderE/>
            <main className="flex-1 p-4 justify-center">
                <h1 className="text-6xl text-center font-semibold text-black">Espace Employé</h1>
            </main>
        </div>
    )
}