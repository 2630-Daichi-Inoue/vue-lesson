import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import BlogView from '@/views/BlogView.vue'
import NotFound from '@/views/NotFound.vue'
import ProfileView from '@/views/ProfileView.vue'
import PostsView from '@/views/PostsView.vue'
import LikesView from '@/views/LikesView.vue'
import NewsView from '@/views/NewsView.vue'
import PeopleYouMayKnow from '@/views/PeopleYouMayKnow.vue'
import HomeFooter from '@/views/HomeFooter.vue'
import ProfileFooter from '@/views/ProfileFooter.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        Sidebar: NewsView,
        Footer: HomeFooter,
      }
    },
    {
      path: '/:id',
      name: 'profile',
      components: {
        default: ProfileView,
        Sidebar: PeopleYouMayKnow,
        Footer: ProfileFooter,
      },
      children: [
        {
          path: 'posts',
          name: 'posts',
          component: PostsView
        },
        {
          path: 'likes',
          name: 'likes',
          component: LikesView
        }
      ]
    }
    ,
    {
      path: '/about',
      alias: ['/me', '/yoshipi'],
      name: 'about',
      component: AboutView
    },
    {
      path: '/blog/:id',
      alias: '/article/:id',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/:catchAll(.*)*',
      name: 'notFound',
      props: true,
      component: NotFound
    }
  ]
})
export default router
