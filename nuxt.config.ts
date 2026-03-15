// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Table Perks - Turn Every Visit & Customers Into Everlasting Loyalty',
      meta: [
        { name: 'description', content: 'A complete, white-label loyalty platform for restaurants and businesses.' }
      ]
    }
  }
})
