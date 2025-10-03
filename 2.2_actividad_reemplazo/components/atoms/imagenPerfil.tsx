interface ImagenPerfilProps{
    src: string;
    tamanio: string;
}

export function ImagenPerfil({src, tamanio}: ImagenPerfilProps){
    <img
        src = {src}
        style={{
        width: `${tamanio}px`,
        height: `${tamanio}px`,
        borderRadius: '50%', // Borde redondeado
        objectFit: 'cover',  // Asegura que la imagen mantenga proporciones
      }}
    ></img>
    
}