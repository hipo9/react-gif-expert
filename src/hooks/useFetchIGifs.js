import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


/*Dato. Generalmente cuando se devuelve un hooks se le agrega .jsx pero si on vamos a regresar codifo jsx podemos solo usar el ".js" */
//Un hook no es mas que una funcion

export const useFetchIGifs = ( category ) => {
    
     const [images, setImages] = useState( [] );
    const [isLoading, setIsLoading] = useState( true );
    
    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
    };

    useEffect( () => {
        getImages();
    }, [] );

    return {
        images,
        isLoading
    }
}


