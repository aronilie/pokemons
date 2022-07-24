import PokemonsList from "./components/PokemonsList/PokemonsList.js";

const url = "https://pokeapi.co/api/v2/pokemon/?offset=00&limit=50";

new PokemonsList(document.body, url);
