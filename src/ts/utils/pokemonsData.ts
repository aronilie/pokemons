import { Pokemon, PokemonData as IPokemonData } from "../types/interfaces.js";

export const url = "https://pokeapi.co/api/v2/pokemon/?offset=00&limit=50";

export const pokemons: Pokemon[] = [];

export const allPokemonsUrls: string[] = [];

export const getAllPokemonsUrls = async (pokemonsListUrl: string) => {
  const response = await fetch(pokemonsListUrl);
  const data: IPokemonData = await response.json();

  data.results.forEach((PokemonData) => {
    allPokemonsUrls.push(PokemonData.url);
  });
};
