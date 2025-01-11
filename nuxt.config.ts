// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/src/presentation/assets/styles/main.css'],
  modules: [
    '@nuxt/eslint',
  ],
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: true,
      },
    },
  },
  components: [
    {
      path: '~/src/presentation/components',
      pathPrefix: false,
    },
  ],
})
