import type { ActionTree } from 'vuex/types/index.js';
import type { ProductState } from './state';
import { ProductRepositoryImpl } from '~/infrastructure/repositories/ProductRepositoryImpl';

export const actions: ActionTree<ProductState, any> = {
  async fetchProducts({ commit }) {
    const productRepo = new ProductRepositoryImpl();
    commit('SET_LOADING', true);
    try {
      const products = await productRepo.getAllProducts();
      commit('SET_PRODUCTS', products);
    }
    catch (error) {
      console.error(error);
    }
    finally {
      commit('SET_LOADING', false);
    }
  },
};
