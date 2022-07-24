import { Pokemon, PokemonData as IPokemonData } from "../types/interfaces.js";

export const url = "https://pokeapi.co/api/v2/pokemon/?offset=00&limit=50";

export const pokemons: Pokemon[] = [];

export const allPokemonsUrls: string[] = [];

export const addPokemon = async (pokemonUrl: string) => {
  const response = await fetch(pokemonUrl);
  const data = await response.json();

  const {
    abilities,
    forms,
    id,
    sprites: {
      other: {
        home: { front_shiny: pokemonImage },
      },
    },
    weight,
  } = data;

  const pokemon: Pokemon = {
    pokemonId: id,
    name: forms[0].name,
    imageURL: pokemonImage,
    firstAbility: abilities[0].ability.name,
    secondAbility: abilities[1].ability.name,
    pokemonWeight: weight,
  };

  pokemons.push(pokemon);
};

export const getAllPokemonsUrls = async (pokemonsListUrl: string) => {
  const response = await fetch(pokemonsListUrl);
  const data: IPokemonData = await response.json();

  data.results.forEach((PokemonData) => {
    allPokemonsUrls.push(PokemonData.url);
  });
};
