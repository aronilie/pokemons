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
    this.showPokemon(this.pokemonUrl);
  };

  showPokemon = async (pokemonUrl: string) => {
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

    const pokemonShowed = pokemon;

    const scriptHTML = await `
      <img class="pokemon__image" src=${pokemonShowed.imageURL} />
      <div class=pokemon__text>
        <h2>${pokemonShowed.name}</h2>
        <span>${pokemonShowed.firstAbility}</span>
        <span>${pokemonShowed.secondAbility}</span>
      </div>`;
    this.element.innerHTML = scriptHTML;
    this.parent.appendChild(this.element);
  };
}

export default PokemonCard;
