<template>
    <main class="main-body">
      <Products/>
    </main>
  </template>
  
  <script>
  import Carrousel from '../components/Carrousel.vue';
  import Cards from '../components/Cards.vue';
  import Products from '../components/Products.vue';
  import json from '../json/products.json';
  
  export default {
    name: 'HomeView',
    components: {
      Products
  },
    data() {
      return {
        products: json.products
      };
    },
    computed: {
  
    },
    created() {
  
    },
    methods: {
  
    }
  
  }
  </script>
  <style scoped lang="scss">
  
  </style>
  