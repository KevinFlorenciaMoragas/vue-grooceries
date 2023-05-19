<template>
    <main class="main-body">
      <NotFound/>
    </main>
  </template>
  
  <script>
  import NotFound from '../components/NotFound.vue';
  import json from '../json/products.json';
  
  export default {
    name: 'HomeView',
    components: {
      NotFound
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
  