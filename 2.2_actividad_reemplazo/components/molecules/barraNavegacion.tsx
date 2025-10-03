import { MiBoton } from "components/atoms/boton";
import { MiLogo } from "components/atoms/logo";
import { ImagenPerfil } from "components/atoms/imagenPerfil";
import './barraNavegacion.css'

interface barraNavegacion {
   Home: () => void;
   Info: () => void;
   Contacto: () => void;
}

export function NavBar({ Home, Info, Contacto }: barraNavegacion) {
   return (
      <div className="nav-bar">
         <MiLogo />
         <ul>
            <li> <MiBoton texto="Inicio" onClick={Home} colorFondo="#e6d5d591" colorTexto="black" /> </li>
            <li> <MiBoton texto="Informacion" onClick={Info} colorFondo="#e6d5d591" colorTexto="black" /> </li>
            <li> <MiBoton texto="Contacto" onClick={Contacto} colorFondo="#e6d5d591" colorTexto="black" /> </li>
         </ul>
         <ImagenPerfil src="../assets/profile_icon.png" tamanio="100" ></ImagenPerfil>
      </div>

   )
}