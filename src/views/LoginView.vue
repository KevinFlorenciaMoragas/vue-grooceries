<template>
  <main class="main-body">
    <Login />
    
  </main>
</template>

<script>
import Login from '../components/Login.vue';
import json from '../json/products.json';

export default {
  name: 'Login',
  components: {
    Login
},
  data() {
    return {
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
