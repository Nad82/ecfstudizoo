
import Aproposhome from "@/components/aproposhome";
import { Habitatshome } from "@/components/habitatshome";
import { Serviceshome } from "@/components/serviceshome";
import Videohome from "@/components/videohome";
import Temoignagehome from "./temoignages/[id]/page";
import { Formulaireavis } from "@/components/formulaireavis";


export default function Home() {
  return (
    <div>
      <Videohome />
      <br/>
      <Aproposhome />
      <br />
      <Serviceshome />
      <br />
      <Habitatshome />
      <br />
      <Temoignagehome />
      <br />
      <Formulaireavis />
    </div>
  )
}
