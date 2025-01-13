import type { MutationTree } from 'vuex/types/index.js';
import type { BackdropState } from './state';

export const mutations: MutationTree<BackdropState> = {
  SHOW_BACKDROP(state) {
    state.isVisible = true;
  },
  HIDE_BACKDROP(state) {
    state.isVisible = false;
  },
  TOGGLE_BACKDROP(state) {
    state.isVisible = !state.isVisible;
  },
};
