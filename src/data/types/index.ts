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
  category: TCategory;
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

export enum ECategory {
  all = 'Все',
  meat = 'Мясные',
  vegetarian = 'Вегетарианские',
  grill = 'Гриль',
  sharp = 'Острые',
  closed = 'Закрытые',
}

export type TCategory = keyof typeof ECategory;

export type TCatalogCategoriesItem = {
  id: number;
  value: TCategory;
};

export enum ESortType {
  rating = 'популярности',
  price = 'цене',
  name = 'алфавиту',
}

export type TSortType = keyof typeof ESortType;

export const sortTypes = Object.keys(ESortType) as TSortType[];

export type TIcon = 'pizza' | 'cross' | 'minus' | 'plus' | 'trash';
