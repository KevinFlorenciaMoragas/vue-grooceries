import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
//import {BootstrapVue,  IconsPlugin } from 'bootstrap-vue'
//import Vue from 'vue'
// styles
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-vue/dist/bootstrap-vue.css"; // bootstrap

const app = createApp(App);
app.use(router);
app.mount("#app")
