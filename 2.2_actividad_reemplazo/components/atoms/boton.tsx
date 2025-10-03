import { Button } from 'antd';

interface Boton {
   texto: string;
   onClick: () => void;
   colorFondo?: string;
   colorTexto?: string;  // Propiedad opcional para color
}

export function MiBoton({ texto, onClick, colorFondo = 'blue', colorTexto = "white"}: Boton) {
   return (
      <Button
         type="primary"
         onClick={onClick}
         style={{ backgroundColor: colorFondo, color: colorTexto }}
      >
         {texto}
      </Button>
   );
}