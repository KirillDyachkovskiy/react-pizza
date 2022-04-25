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
