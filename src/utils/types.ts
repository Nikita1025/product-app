export type ResponseProductsType = {
  id: number;
  image: string;
  price: number;
  title: string;
  category: string;
  description: string;
};

export type AddProductType = {
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export type EditProductType = {
  title?: string;
  price?: number;
  category?: string;
  description?: string;
  image?: string;
  id?: number;
};
export type EditProductResponseType = {
  title?: string;
  price?: number;
  category?: string;
  description?: string;
  image?: string;
  id?: number;
};
export type DeleteProductResponseType = {
  title?: string;
  price?: number;
  category?: string;
  description?: string;
  image?: string;
  id?: number;
};

export type AddProductResponseType = {
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  id: number;
};
export type LoginFormType = {
  username: string;
  password: string;
};
export type LoginResponseType = {
  token: string;
};
