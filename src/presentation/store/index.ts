import { createStore } from 'vuex';
import { backdrop } from './backdrop';
import { product } from './product';
import { checkout } from './checkout';
import { cart } from './cart';

export const store = createStore({
  modules: {
    backdrop,
    product,
    checkout,
    cart,
  },
});

export default store;
