import { pokemons } from "../../utils/pokemonsData.js";
import Component from "../Component/Component.js";
import { Pokemon } from "../../types/interfaces.js";

class PokemonCard extends Component {
  parent;

  constructor(parent: HTMLElement, private pokemonUrl: string) {
    super(parent, "pokemon-card", "li");

    this.parent = parent;

    this.render();
  }

  render = async () => {
    this.addPokemon(this.pokemonUrl);
  };

  addPokemon = async (pokemonUrl: string) => {
    const response = await fetch(pokemonUrl);
    const data = await response.json();

    const {
      abilities,
      forms,
      id,
      sprites: {
        other: {
          "official-artwork": { front_default: pokemonImage },
        },
      },
    } = data;

    const pokemon: Pokemon = {
      pokemonId: id,
      name: forms[0].name,
      imageURL: pokemonImage,
      firstAbility: abilities[0].ability.name,
      secondAbility: abilities[1].ability.name,
    };

    pokemons.push(pokemon);

    const scriptHTML = await `
      <img class="pokemon__image" src=${pokemons[0].imageURL} />
      <div class=pokemon__text>
        <h2>${pokemons[0].name}</h2>
        <span>${pokemons[0].firstAbility}</span>
        <span>${pokemons[0].secondAbility}</span>
      </div>`;
    this.element.innerHTML = scriptHTML;
    this.parent.appendChild(this.element);
  };
}

export default PokemonCard;
