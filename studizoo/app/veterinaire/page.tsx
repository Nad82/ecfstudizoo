import AsidebarV from "@/components/asidebarV"
import HeaderV from "@/components/header-veterinaire"

export default function HomeVeterinaire() {
    return (
        <div className ="flex min-h-screen w-full flex-col bg-muted/40">
            <AsidebarV/>
            <HeaderV/>
            <main className="flex-1 p-4 justify-center">
                <h1 className="text-6xl text-center font-semibold text-black">Espace Vétérinaire</h1>
            </main>
        </div>
    )
}