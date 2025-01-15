import { createStore } from 'vuex';
import { backdrop } from './backdrop';
import { product } from './product';

export const store = createStore({
  modules: {
    backdrop,
    product,
  },
});

export default store;
