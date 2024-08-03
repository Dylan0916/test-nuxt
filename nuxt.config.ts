import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@vee-validate/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  experimental: {},

  build: {
    transpile:
      process.env.NODE_ENV === 'production' ? ['naive-ui', 'vueuc', '@css-render/vue3-ssr', '@juggle/resize-observer'] : ['@juggle/resize-observer'],
  },

  css: ['@/assets/styles/main.scss'],

  unocss: {
    // https://github.com/unocss/unocss/blob/main/packages/nuxt/src/types.ts
    preflight: true,
    components: false,
    uno: false,
  },

  vite: {
    plugins: [
      svgLoader({
        svgoConfig: {
          plugins: ['prefixIds'],
        },
      }),
    ],
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns', 'date-fns-tz/formatInTimeZone', 'vee-validate', 'zod', '@vee-validate/zod']
          : [],
    },
    // $client: {
    //   server: {
    //     hmr: {
    //       protocol: 'test123',
    //     },
    //   },
    // },
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

  robots: {},

  sitemap: {
    // sitemaps: true,
    sitemapName: 'sitemap_index2.xml',
  },

  compatibilityDate: '2024-07-19',
})
