import HomePage from '@/views/HomePage/HomePage.vue'
import AddNotePage from '@/views/AddNotePage/AddNotePage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ViewPage from '@/views/ViewPage/ViewPage.vue'
import UpdateNotePage from '@/views/UpdateNotePage/UpdateNotePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage,
      name: 'Home',
    },
    {
      path: '/:id',
      component: ViewPage,
      name: 'Details',
    },
    {
      path: '/:id/update',
      component: UpdateNotePage,
      name: 'Update',
    },
    {
      path: '/new',
      component: AddNotePage,
      name: 'New',
    },
  ],
})

export default router
