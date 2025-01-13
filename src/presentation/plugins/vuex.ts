import store from '~/presentation/store';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});
