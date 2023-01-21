import { useState } from 'react';
import { AddCategory, GifGrid } from './components/';

/* 1.- INICIO */
const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch']);

	const onAddCategory = (NewCategory) => {
		//si la categoria X ya incluye NewCategory y que ya no ejecute el digo
		if (categories.includes(NewCategory)) return;

	//Agregamos en el arreglo las nuevas categorias que se vayan Agregando
		//setCategories( [...categories, 'Nuevo'] );
		setCategories((category) => {
			return [...category, NewCategory];
		});
	};

	return (
		<>
			<h1>GifExpertApp</h1>
			{/* Importamos el componente en donde esta el formulario*/}
			<AddCategory
				/*setCategories={ setCategories }*/
				/* enviamo el state(parametro) en este */
				onNewCategory={ ( category ) => onAddCategory( category )
									
					
				}
				
			/>
			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
};

export default GifExpertApp;
