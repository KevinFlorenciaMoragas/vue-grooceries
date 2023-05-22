<template>
  <main class="main-body">
    <Register/>
  </main>
</template>

<script>

import Register from '../components/Register.Vue';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  name: 'RegisterView',
  components: {
    Register
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
    register() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });

    }
  }

}
</script>
<style scoped lang="scss"></style>
