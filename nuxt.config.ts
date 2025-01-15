// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
  ],
  plugins: [
    '~/presentation/plugins/v-mask.ts',
  ],
  components: [
    {
      path: '~/presentation/components',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  css: ['~/presentation/assets/styles/_vars.css', '~/presentation/assets/styles/main.css'],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8000',
    },
  },
  dir: {
    pages: 'presentation/pages',
    assets: 'presentation/assets',
    plugins: 'presentation/plugins',
  },
  srcDir: 'src/',
  alias: {
    '@components': '~/presentation/components',
    '@assets': '~/presentation/assets',
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: true,
      },
    },
  },
});
