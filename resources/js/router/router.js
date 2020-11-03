import Vue from 'vue'
import VueRouter from 'vue-router'

  import auth from './middleware/auth'
  import admin from './middleware/admin'
  import guest from './middleware/guest'
 import middlewarePipeline from './kernel/middlewarePipeline'

import store from '../store'



Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackPreload: true */ '../views/Home.vue'),
        meta: {
            layout: 'mardom'
        }
    },
    { path: '/home', redirect: '/' },
    {
        path: '/painting-decorating',
        name: 'painting',
        component: () => import(/* webpackPreload: true */ '../views/Painting.vue'),
        meta: {
            layout: 'mardom'
        }
    },
    { path: '/our-services', redirect: '/painting-decorating' },
    {
        path: '/interior-design',
        name: 'Interior',
        component: () => import(/* webpackPreload: true */ '../views/Interior.vue'),
        meta: {
            layout: 'mardom'
        }
    },
    {
        path: '/property-maintenance',
        name: 'property-maintenance',
        component: () => import(/* webpackPreload: true */ '../views/Maintenance.vue'),
        meta: {
            layout: 'mardom'
        }
    },
    {
        path: '/cleaning-services',
        name: 'cleaning-services',
        component: () => import(/* webpackPreload: true */ '../views/Cleaning.vue'),
        meta: {
            layout: 'mardom'
        }
    },
    {
        path: '/reviews',
        name: 'reviews',
        component: () => import(/* webpackPreload: true */ '../views/Reviews.vue'),
        meta: {
            layout: 'mardom'
        }
    },
    {
        path: '/about-us',
        name: 'about-us',
        component: () => import(/* webpackPreload: true */ '../views/About.vue'),
        meta: {
            layout: 'mardom'
        }
    },
    {
        path: '/feedback',
        name: 'feedback',
        component: () => import(/* webpackPreload: true */ '../views/Feedback.vue'),
        meta: {
            layout: 'mardom'
        }
    },

    // admin section
    {
        path: '/admin/dashboard',
        name: 'dashboard',
        component: () => import('../views/admin/Dashboard.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/ratings',
        name: 'ratings',
        component: () => import('../views/admin/Ratings.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/notify',
        name: 'notify',
        component: () => import('../views/admin/Notify.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/categories',
        name: 'categories',
        component: () => import('../views/admin/Categories.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/roles',
        name: 'roles',
        component: () => import('../views/admin/Roles.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/social',
        name: 'social',
        component: () => import('../views/admin/Social.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/users',
        name: 'users',
        component: () => import('../views/admin/Users.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },

    // Other Pages
    {
        path: '/about',
        name: 'about-us',
        component: () => import('../views/pages/About.vue'),
        meta: {
            layout: 'mardom'
        }
    },
    {
        path: '/contact',
        name: 'contact-us',
        component: () => import('../views/pages/Contact.vue'),
        meta: {
            layout: 'mardom'
        }
    },
    {
        path: '/faqs',
        name: 'faqss',
        component: () => import('../views/pages/Faqs.vue'),
        meta: {
            layout: 'mardom'
        }
    },

    // Accounts pages
    {
        path: '/account',
        name: 'account',
        component: () => import('../views/account/Index.vue'),
        meta: {
            layout: 'khod',
            middleware: [
                auth
            ]
        }
    },

    // Auth and register
    {
        path: '/signin',
        name: 'signin',
        component: () => import('../views/auth/SignIn.vue'),
        meta: {
            layout: 'mardom',
            middleware: [
                guest
            ]
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/auth/Register.vue'),
        meta: {
            layout: 'mardom',
            middleware: [
                guest
            ]
        }
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('../views/auth/Forgot-password.vue'),
        meta: {
            layout: 'mardom',
            middleware: [
                guest
            ]
        }
    },
    {
        path: '/password-reset',
        name: 'password-reset',
        component: () => import('../views/auth/Password-reset.vue'),
        meta: {
            layout: 'mardom',
            middleware: [
                guest
            ]
        }
    },

    {
        path: '/404',
        component: () => import('../views/Error.vue'),
    },
    { path: '*', redirect: '/404' },

  ]

  const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history',
  })

//   router.beforeEach((to, from, next) => {
//       const token = localStorage.getItem('token') || null
//         window.axios.defaults.headers['Authorization'] = 'Bearer ' + token;
//         next();
//     })


// Method 1: Defining middleware in routes
router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
      return next()
    }

    const middleware = to.meta.middleware

    const context = {
      to,
      from,
      next,
      router,
      store
    }

    return middleware[0]({
      ...context, next: middlewarePipeline(context, middleware, 1)
    })
  })


export default router
