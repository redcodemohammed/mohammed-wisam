// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxtjs/google-fonts', '@vueuse/nuxt', '@nuxt/image'],
  ssr: false,
  css: ['~/assets/css/main.css', '~/assets/fonts/fonts.css'],

  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  },

  googleFonts: {
    families: {
      'Space Grotesk': [400, 500, 600, 700],
      'Geist Mono': [400, 500, 700]
    },
    download: true,
    outputDir: 'app/assets/fonts',
    fontsDir: '',
    stylePath: 'fonts.css'
  },

  compatibilityDate: '2025-07-15'
})
