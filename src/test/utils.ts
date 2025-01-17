import Vuex from 'vuex';

export function createVuexStore(options) {
  return new Vuex.Store({
    state: options.state || {},
    actions: options.actions || {},
    mutations: options.mutations || {},
    getters: options.getters || {},
  });
}
