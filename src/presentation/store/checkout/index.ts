import type { Module } from 'vuex/types/index.js';
import type { CheckoutState } from './state';
import { state } from './state';
import { mutations } from './mutations';
import { actions } from './actions';

export const checkout: Module<CheckoutState, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
};
