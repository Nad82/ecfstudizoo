import AsidebarAM from "@/components/asidebarAM";
import HeaderAM from "@/components/header-adminmaster";

export default function HomeAdminMaster() {
    return (
        <div className ="flex min-h-screen w-full flex-col bg-green-800">
            <AsidebarAM/>
            <HeaderAM/>
            <main className="flex-1 p-4 justify-center">
                <h1 className="text-6xl text-center font-semibold text-yellow-400">Espace Admin Master</h1>
            </main>
        </div>  
    )
}