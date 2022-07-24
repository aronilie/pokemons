export interface Component {
  element: HTMLElement;
  render?: () => void;
  addListeners?: () => void;
}

export interface PokemonData {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
}

export interface Pokemon {
  pokemonId: number;
  name: string;
  imageURL: string;
  firstAbility: string;
  secondAbility: string | null;
  pokemonWeight: number;
}
