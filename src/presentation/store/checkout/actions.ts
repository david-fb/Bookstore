import type { ActionTree } from 'vuex/types/index.js';
import type { CheckoutState } from './state';

export const actions: ActionTree<CheckoutState, any> = {
  setCheckout({ commit }, checkout) {
    commit('SET_CHECKOUT', checkout);
  },
  setItems({ commit }, items) {
    commit('SET_ITEMS', items);
  },
  setDeliveryInfo({ commit }, deliveryInfo) {
    commit('SET_DELIVERY_INFO', deliveryInfo);
  },
  setPaymentInfo({ commit }, paymentInfo) {
    commit('SET_PAYMENT_INFO', paymentInfo);
  },
  setTotal({ commit }, total) {
    commit('SET_TOTAL', total);
  },
  decrementItem({ commit, state }, item) {
    const items = state.checkout.items;
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
    const items = state.checkout.items;
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
    const items = state.checkout.items;
    const index = items.findIndex(i => i.id === item.id);
    if (index !== -1) {
      items.splice(index, 1);
      commit('SET_ITEMS', [...items]);
    }
  },
};
