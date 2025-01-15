import type { Product } from '~/domain/entities/Product';

export interface ProductState {
  products: Product[];
  loading: boolean;
}

export const state: ProductState = {
  products: [],
  loading: false,
};
