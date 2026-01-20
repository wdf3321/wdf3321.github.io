// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'jp', iso: 'ja-JP', file: 'jp.json', name: 'Japanese' },
      { code: 'zh', iso: 'zh-TW', file: 'zh.json', name: 'Traditional Chinese' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    // lazy: true,
    langDir: 'i18n/locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  },
  app: {
    baseURL: '/', // Repository name if not user/org site, but this looks like a user site (wdf3321.github.io)
    buildAssetsDir: 'assets', // Optional: keeps assets cleaner
  },
  nitro: {
    preset: 'github-pages'
  }
})