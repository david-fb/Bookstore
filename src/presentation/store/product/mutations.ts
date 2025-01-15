import type { MutationTree } from 'vuex/types/index.js';
import type { ProductState } from './state';

export const mutations: MutationTree<ProductState> = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
};
