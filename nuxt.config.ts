// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase"],
  supabase: {
    url: "https://wdvgskhdizkqfhzwpfdf.supabase.co",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indkdmdza2hkaXprcWZoendwZmRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5MTQ1NjYsImV4cCI6MjAyOTQ5MDU2Nn0.QYXVmflyw93ysJv8duxgy10RIHjGdF8jd0txyv1WbD4",
    redirect: false,
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      include: undefined,
      exclude: [],
      cookieRedirect: true,
    }
  }
})