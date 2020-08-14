
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/index', component: () => import('pages/Index.vue') },
      { path: '/castellan', component: () => import('pages/Castellan.vue') },
      { path: '/grace', component: () => import('pages/Grace.vue') },
      { path: '/solace', component: () => import('pages/Solace.vue') },
      { path: '/chase', component: () => import('pages/Chase.vue') },
      { path: '/atkins', component: () => import('pages/Atkins.vue') },
      { path: '/stole', component: () => import('pages/Stole.vue') },
      { path: '/mclean', component: () => import('pages/McLean.vue') },
      { path: '/jackson', component: () => import('pages/Jackson.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
