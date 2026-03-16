import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  scrollBehavior(to, from, savedPosition) {
    // ini untuk scroll ke section tertentu ketika kita klik link di navbar, misalnya klik "About" maka akan scroll ke section about di HomeView
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView, // HomeView will render inside <router-view> in App.vue
    },
    {
      path: '/about',
      name: 'about',
      // component: () => import('../views/AboutView.vue'),  // ini kalau mau pakai halaman terpisah untuk about, tapi karena kita sudah buat section about di HomeView, kita bisa langsung scroll ke situ
      redirect: { name: 'home', hash: '#about' },
    },
    {
      path: '/congregations',
      name: 'congregations',
      // component: () => import('../views/CongregationsView.vue'),  // ini kalau mau pakai halaman terpisah untuk about, tapi karena kita sudah buat section about di HomeView, kita bisa langsung scroll ke situ
      redirect: { name: 'home', hash: '#congregations' },
    },
    // You can add more routes here for other pages
    // {
    //   path: '/profile',
    //   name: 'profile',
    //   component: () => import('../views/ProfileView.vue'), // Example new route
    // },
    // {
    //   path: '/settings',
    //   name: 'settings',
    //   component: () => import('../views/SettingsView.vue'), // Example new route
    // },
    // },
  ],
})

export default router
