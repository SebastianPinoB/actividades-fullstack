import { MiBoton } from "components/atoms/boton";

interface barraNavegacion{
   Home: ()=> void;
   Info: ()=> void;
   Contacto: ()=> void;
}

export function NavBar({ Home, Info, Contacto}: barraNavegacion){
   return(
      <ul>
         <li> <MiBoton texto="Inicio" onClick={Home}/> </li>
         <li> <MiBoton texto="Informacion" onClick={Info}/> </li>
         <li> <MiBoton texto="Contacto" onClick={Contacto}/> </li>
      </ul>
   )
}