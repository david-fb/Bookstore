// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src/',
  dir: {
    pages: 'presentation/pages',
    assets: 'presentation/assets',
  },
  css: ['~/presentation/assets/styles/_vars.css','~/presentation/assets/styles/main.css'],
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
      path: '~/presentation/components',
      pathPrefix: false,
    },
  ],
  alias: {
    '@components': '~/presentation/components',
    '@assets': '~/presentation/assets',
  },
})
