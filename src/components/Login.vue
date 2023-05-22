<template>
  <div>
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="login">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>

      <label for="password">Contraseña:</label>
      <input type="password" id="password" v-model="password" required>

      <button type="submit">Iniciar sesión</button>
    </form>
  </div>
  
</template>
<script>


export default {
    name: 'Login',
    components: {

    }
}
</script>
  
<style scoped lang="scss"> </style>