<template>
  <main class="main-body">
 
    <Carrousel :products="products"/>
    <Cards :products="products"/>
  </main>
</template>

<script>
import Carrousel from '../components/Carrousel.vue';
import Cards from '../components/Cards.vue';
import json from '../json/products.json';

export default {
  name: 'HomeView',
  components: {
    Carrousel,
    Cards
},
  data() {
    console.log(json.products);
    return {

      products:[]
      
    };
  },
  computed: {

  },
  created() {
    this.products = json.products;
  },
  methods: {

  }

}
</script>
<style scoped lang="scss">

</style>
