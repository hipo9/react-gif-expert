import { GifItem } from './GifItem';
import { useFetchIGifs } from '../hooks/useFetchIGifs';

export const GifGrid = ({ category }) => {
	try {
		const { images, isLoading } = useFetchIGifs(category);

		return (
			<>
				<h3>{category}</h3>
				{
					isLoading && ( <h2>Cargando..</h2>)
				}
				<div className='card-grid'>
					{images.map((image) => (
						//le enviamos el objeto(como parametro/prop) lla estructurado
						<GifItem key={image.id} {...image} />
					))}
				</div>
			</>
		);
	} catch (error) {
		console.log(error);
	}
};
