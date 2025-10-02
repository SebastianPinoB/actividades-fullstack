import { Button } from 'antd';

interface boton{
   texto: string;
   onClick: ()=> void;
}

export function MiBoton({texto, onClick}: boton){
   return <Button type='primary' onClick={onClick}>{texto}</Button>
}