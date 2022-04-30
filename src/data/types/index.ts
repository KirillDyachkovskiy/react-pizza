export type TPage = {
  title: string;
};

export enum EPizzaType {
  traditional = 'традицилнное',
  thin = 'тонкое',
}

export type TPizzaType = keyof typeof EPizzaType;

export type TPizzaSize = 26 | 30 | 40;

export type TPizza = {
  id: number;
  imageUrl: string;
  name: string;
  types: TPizzaType[];
  sizes: TPizzaSize[];
  price: number;
  category: TCategories;
  rating: number;
};

export type TCartItem = {
  id: number;
  name: string;
  imageUrl: string;
  type: TPizzaType;
  size: TPizzaSize;
  count: number;
  price: number;
  totalPrice: number;
};
export type TPizzaParams = {
  type: TPizzaType;
  size: TPizzaSize;
};

export type TAddPizzaToCartPayload = Omit<TCartItem, 'count' | 'totalPrice'>;
export type TPizzaIdentification = {
  id: number;
  type: TPizzaType;
  size: TPizzaSize;
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
  rating = 'по популярности',
  price = 'по цене',
  name = 'по алфавиту',
}

export type TSortType = keyof typeof ESortType;
