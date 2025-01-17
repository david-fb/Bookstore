import type { MutationTree } from 'vuex/types/index.js';
import type { CartState } from './state';

export const mutations: MutationTree<CartState> = {
  SET_ITEMS(state, items) {
    state.cart.items = items;
  },
  TOGGLE_OPEN(state) {
    state.cart.open = !state.cart.open;
  },
};
