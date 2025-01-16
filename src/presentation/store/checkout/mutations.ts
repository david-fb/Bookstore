import type { MutationTree } from 'vuex/types/index.js';
import type { CheckoutState } from './state';
import hasValidProperties from '~/utils/checkObjectProperties';

export const mutations: MutationTree<CheckoutState> = {
  SET_CHECKOUT(state, checkout) {
    state.checkout = checkout;
  },
  SET_ITEMS(state, items) {
    state.checkout.items = items;
    state.checkout.total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    state.checkout.quantityProducts = items.reduce((acc, item) => acc + item.quantity, 0);
  },
  SET_DELIVERY_INFO(state, deliveryInfo) {
    state.checkout.deliveryInfo = deliveryInfo;
    delete deliveryInfo.completed;
    state.checkout.deliveryInfo.completed = hasValidProperties(deliveryInfo).isValid;
  },
  SET_PAYMENT_INFO(state, paymentInfo) {
    state.checkout.paymentInfo = paymentInfo;
    delete paymentInfo.completed;
    state.checkout.paymentInfo.completed = hasValidProperties(paymentInfo).isValid;
  },
  SET_TOTAL(state, total) {
    state.checkout.total = total;
  },
};
