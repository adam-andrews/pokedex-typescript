import React, { useEffect, useState } from 'react';
import Pokemon from '../components/pokemon';
type pokemon = {
	name: string;
	url: string;
};
function csr() {
	const [pokemon, setPokemon] = useState<pokemon[]>([]);
	useEffect(() => {
		async function getData() {
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
			const { results } = await response.json();
			results.map((pokemon: pokemon, index: number) => {
				const pokiId = index + 1;
				pokemon.url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokiId}.png`;
			});
			setPokemon(results);
		}
		getData();
	}, []);

	console.log(pokemon, 'pokemon');
	return (
		<div>
			{pokemon.map((pokemon) => {
				return <Pokemon name={pokemon.name} url={pokemon.url} />;
			})}
		</div>
	);
}

export default csr;
