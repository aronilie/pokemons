import Component from "../Component/Component.js";
import {
  Component as IComponent,
  PokemonData as IPokemonData,
} from "../../types/interfaces.js";
import PokemonCard from "../PokemonCard/PokemonCard.js";

class PokemonsList extends Component implements IComponent {
  parent;

  constructor(parent: HTMLElement, private urlOfAllPokemons: string) {
    super(parent, "pokemons-list", "ul");

    this.parent = parent;

    this.render();
  }

  render = async () => {
    const response = await fetch(this.urlOfAllPokemons);
    const data: IPokemonData = await response.json();

    data.results.forEach((PokemonData) => {
      new PokemonCard(this.element, PokemonData.url);
    });
  };
}

export default PokemonsList;
