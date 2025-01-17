import type { ActionTree } from 'vuex/types/index.js';
import type { CartState } from './state';

export const actions: ActionTree<CartState, any> = {
  setItems({ commit }, items) {
    commit('SET_ITEMS', items);
  },
  setTotal({ commit }, total) {
    commit('SET_TOTAL', total);
  },
  decrementItem({ commit, state }, item) {
    const items = state.cart.items;
    const index = items.findIndex(i => i.id === item.id);
    if (index !== -1) {
      items[index].quantity -= 1;
      if (items[index].quantity === 0) {
        items.splice(index, 1);
      }
      commit('SET_ITEMS', [...items]);
    }
  },
  incrementItem({ commit, state }, item) {
    const items = state.cart.items;
    const index = items.findIndex(i => i.id === item.id);
    if (index !== -1) {
      const nextQuantity = items[index].quantity + 1;
      if (nextQuantity > item.stock) {
        return;
      }
      items[index].quantity = nextQuantity;
      commit('SET_ITEMS', [...items]);
    }
  },
  removeItem({ commit, state }, item) {
    const items = state.cart.items;
    const index = items.findIndex(i => i.id === item.id);
    if (index !== -1) {
      items.splice(index, 1);
      commit('SET_ITEMS', [...items]);
    }
  },
  addItem({ commit, state }, item) {
    const items = state.cart.items;
    const index = items.findIndex(i => i.id === item[0].id);
    if (index === -1) {
      items.push(item[0]);

      commit('SET_ITEMS', [...items]);
      return;
    }
    items[index].quantity += 1;
    commit('SET_ITEMS', [...items]);
  },
  toggleCart({ commit }) {
    commit('TOGGLE_OPEN');
  },
};
