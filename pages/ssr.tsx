import React, { useEffect, useState } from 'react';
import Pokemon from '../components/pokemon';
type pokemonProps = {
	pokemon: pokemon[];
};

type pokemon = {
	name: string;
	url: string;
};
function ssr({ pokemon }: pokemonProps) {
	console.log(pokemon, 'pokemon');
	return (
		<div>
			{pokemon.map((pokemon) => {
				return (
					<Pokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
				);
			})}
		</div>
	);
}

export async function getServerSideProps() {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
	const { results } = await response.json();
	results.map((pokemon: pokemon, index: number) => {
		const pokiId = index + 1;
		pokemon.url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokiId}.png`;
	});

	return {
		props: {
			pokemon: results,
		},
	};
}

export default ssr;
