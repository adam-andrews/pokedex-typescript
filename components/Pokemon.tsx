import React from 'react';

type pokemonProps = {
	name: string;
	url: string;
};

function Pokemon({ name, url }: pokemonProps) {
	return (
		<div>
			{name}
			<img src={url} />
		</div>
	);
}

export default Pokemon;
