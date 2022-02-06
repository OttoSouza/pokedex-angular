export interface IPokemon {
  name: string;
  img: string;
  types: Types[];
}

export enum Types {
  Grass = 'Grass',
  Poison = 'Poison',
}

