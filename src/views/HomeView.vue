<template>
  <main class="main-body">
 
    <Carrousel :products="products"/>
    <Cards :products="products"/>
    <Newsletter/>
  </main>
</template>

<script>
import Carrousel from '../components/Carrousel.vue';
import Cards from '../components/Cards.vue';
import json from '../json/products.json';
import Newsletter from '../components/Newsletter.vue';

export default {
  name: 'HomeView',
  components: {
    Carrousel,
    Cards,
    Newsletter
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
    goToProducts(){
      this.$router.push({
        name: 'ProductView',
        params: {id}
      });
    }
  }

}
</script>
<style scoped lang="scss">

</style>
