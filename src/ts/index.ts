import { Pokemons } from "./types/interfaces";

async function getDataFromApi(url: string) {
  const response = await fetch(url);
  const data = await response.json();

  let pokemons: Pokemons = [];
  pokemons = data.results;

  return pokemons;
}

const urle = "https://pokeapi.co/api/v2/pokemon/?offset=00&limit=20";

getDataFromApi(urle);
