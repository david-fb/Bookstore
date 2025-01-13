import { createStore } from 'vuex';
import { backdrop } from './backdrop';

export const store = createStore({
  modules: {
    backdrop,
  },
});

export default store;
