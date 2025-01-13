import type { ActionTree } from 'vuex/types/index.js';
import type { BackdropState } from './state';

export const actions: ActionTree<BackdropState, any> = {
  toggleBackdrop({ commit }, show: boolean) {
    if (show === null || show === undefined) {
      commit('TOGGLE_BACKDROP');
    }
    else if (show) {
      commit('SHOW_BACKDROP');
    }
    else {
      commit('HIDE_BACKDROP');
    }
  },
};
