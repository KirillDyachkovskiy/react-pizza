export type TPage = {
  title: string;
};

export type TPizzaType = 0 | 1;
export type TPizzaSize = 26 | 30 | 40;

export type TPizza = {
  id: number;
  imageUrl: string;
  name: string;
  types: TPizzaType[];
  sizes: TPizzaSize[];
  price: number;
  category: number;
  rating: number;
};

export enum ECategories {
  all = 'Все',
  meat = 'Мясные',
  vegetarian = 'Вегетарианские',
  grill = 'Гриль',
  sharp = 'Острые',
  closed = 'Закрытые',
}

export type TCategories = keyof typeof ECategories;

export enum ESortType {
  popularity = 'по популярности',
  price = 'по цене',
  alphabetical = 'по алфавиту',
}

export type TSortType = keyof typeof ESortType;
