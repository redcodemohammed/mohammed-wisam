// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/fonts/fonts.css'],
  modules: ['@nuxtjs/google-fonts', '@nuxt/ui', 'nuxt-icon', '@vueuse/nuxt', '@nuxt/image'],
  googleFonts: {
    families: {
      Poppins: true,
      Roboto: true,
      Outfit: true,
      Inter: true
    },
    download: true,
    outputDir: 'assets/fonts',
    fontsDir: '',
    stylePath: 'fonts.css'
  },
  ui: {
    global: true,
    icons: ['mdi', 'logos', 'tabler']
  }
})
