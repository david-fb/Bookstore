import type { Cart } from '~/utils/getCartType';

export interface CartState {
  cart: Cart;
}

export const state: CartState = {
  cart: {
    items: [],
    open: false,
  },
};
