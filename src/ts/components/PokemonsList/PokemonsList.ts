import Component from "../Component/Component.js";
import { Component as IComponent, Pokemon } from "../../types/interfaces.js";

class PokemonsList extends Component implements IComponent {
  constructor(parent: HTMLElement, pokemon: Pokemon) {
    super(parent, "pokemons-list", "ul");
  }
}

export default PokemonsList;
