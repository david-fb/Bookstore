import type { Module } from 'vuex/types/index.js';
import type { ProductState } from './state';
import { state } from './state';
import { mutations } from './mutations';
import { actions } from './actions';

export const product: Module<ProductState, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
};
