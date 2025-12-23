import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '@/views/HomeView.vue'
const HomeView = () => import('@/views/HomeView.vue')
// import BlogView from '@/views/BlogView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { transition: 'fade' },
      component: HomeView
    },
    {
      path: '/blog/:id',
      name: 'blog',
      component: () => import('@/views/BlogView.vue'),
      meta: { requireAuth: true, transition: 'slide' },
      beforeEnter() {
        console.log('beforeEnter')
      }
    },
  ]
})
router.beforeEach( () => {
  // if (toString.meta.requireAuth && !isLoggedin) {
  //   return '/'
  // }
  console.log('beforeEach')
})

router.beforeResolve(() => {
  console.log('beforeResolve')
})

router.afterEach(() => {
  console.log('afterEach')
})

export default router
