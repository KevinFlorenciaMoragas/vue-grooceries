<template>
  <main class="main-body">
    <Login />

  </main>
</template>

<script>
import Login from '../components/Login.vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import json from '../json/products.json';

export default {
  name: 'Login',
  components: {
    Login
  },
  data() {
    return {
      email: '',
      password: ''

    };
  },
  computed: {

  },
  created() {

  },
  methods: {
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });

      console.log(this.email);
      console.log(this.password);
    }
  }

}
</script>
<style scoped lang="scss"></style>
