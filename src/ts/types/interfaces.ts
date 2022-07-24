export interface Component {
  element: HTMLElement;
  render?: () => void;
  addListeners?: () => void;
}

export interface Pokemon {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  };
}

export type Pokemons = Pokemon[];
