
import Aproposhome from "@/components/aproposhome";
import { Habitatshome } from "@/components/habitatshome";
import { Serviceshome } from "@/components/serviceshome";
import Videohome from "@/components/videohome";
import { Formulaireavis } from "@/components/formulaireavis";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { AvisHome } from "@/components/avis-home";



export default function Home() {

  return (
        <div>
          <Header />
            <Videohome />
            <br/>
            <Aproposhome />
            <br />
            <Serviceshome />
            <br />
            <Habitatshome />
            <br />
            <AvisHome />
            <br />
            <Formulaireavis />
          <Footer/>
        </div>
  )
}
