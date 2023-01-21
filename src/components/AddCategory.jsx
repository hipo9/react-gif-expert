import { useState } from 'react';

export function AddCategory({ onNewCategory} ) {
	
	
	const [inputValue, setInputValue] = useState('');

	
	

	const onIputChaged = ({ target }) => {
		setInputValue(target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if ( inputValue.trim().length <= 1 ) return;

		/*setCategories((category) => [...category, inputValue]);*/
		onNewCategory( inputValue.trim() );
		setInputValue( '' );
	};

	return (
		<form onSubmit={(event) => onSubmit(event)}>
			<input
				type='text'
				placeholder='Buscar gifs'
				value={inputValue}
				onChange={(event) => onIputChaged(event)}
			/>
		</form>
	);
}
