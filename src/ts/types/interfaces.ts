export interface Component {
  element: HTMLElement;
  render?: () => void;
  addListeners?: () => void;
}
