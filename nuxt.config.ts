// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: [
      'nuxt-icon',
      'nuxt-lodash',
      '@pinia/nuxt',
      '@pinia-plugin-persistedstate/nuxt',
      '@nuxtjs/tailwindcss',
      '@nuxtjs/supabase'
  ],
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },
  runtimeConfig: {
      public: {
        stripePk: process.env.STRIPE_PK_KEY
      }
  },
  supabase: {
    redirect: false
  },
  app: {
      head: {
        script: [
          { src: 'https://js.stripe.com/v3/', defer: true }
        ],
      }
    }
})
