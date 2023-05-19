 import {createRouter, createWebHistory} from 'vue-router'
    import HomeView from './views/HomeView.vue'
    import NotFoundView from './views/NotFoundView.vue'
    import LoginView from './views/LoginView.vue'
    import RegisterView from './views/RegisterView.vue'
    import ProductView from './views/Product.vue'

 const routes = [
     { path: '/', component: HomeView },
     { path: '/notfound', component: NotFoundView },
     { path: '/login', component: LoginView },
     { path: '/register', component: RegisterView },
     { path: '/product', component: ProductView },
 ]
 const router = createRouter({history: createWebHistory(), routes})
 export default router