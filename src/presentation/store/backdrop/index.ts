import type { Module } from 'vuex/types/index.js';
import type { BackdropState } from './state';
import { state } from './state';
import { mutations } from './mutations';
import { actions } from './actions';

export const backdrop: Module<BackdropState, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
};
