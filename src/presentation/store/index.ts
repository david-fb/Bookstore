import { createStore } from 'vuex';
import { backdrop } from './backdrop';
import { product } from './product';
import { checkout } from './checkout';

export const store = createStore({
  modules: {
    backdrop,
    product,
    checkout,
  },
});

export default store;
