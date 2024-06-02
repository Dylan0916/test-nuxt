import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxtjs/i18n', '@nuxt/image', '@vueuse/nuxt', '@unocss/nuxt', '@vee-validate/nuxt'],
  experimental: {},
  build: {
    transpile:
      process.env.NODE_ENV === 'production' ? ['naive-ui', 'vueuc', '@css-render/vue3-ssr', '@juggle/resize-observer'] : ['@juggle/resize-observer'],
  },
  css: ['@/assets/styles/main.scss'],
  vite: {
    plugins: [
      svgLoader({
        svgoConfig: {
          plugins: ['prefixIds'],
        },
      }),
    ],
    optimizeDeps: {
      include: process.env.NODE_ENV === 'development' ? ['naive-ui', 'vueuc', 'date-fns-tz/formatInTimeZone'] : [],
    },
  },
  i18n: {
    compilation: {
      strictMessage: false,
    },
    lazy: true,
    strategy: 'no_prefix',
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.ts',
      },
      {
        code: 'zh',
        iso: 'zh-TW',
        file: 'zh.ts',
      },
    ],
    defaultLocale: 'zh',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
  image: {
    dir: 'assets/images',
  },
})
