import type { Module } from 'vuex/types/index.js';
import { state } from './state';
import { mutations } from './mutations';
import { actions } from './actions';
import type { CartState } from './state';

export const cart: Module<CartState, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
};
