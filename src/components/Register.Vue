<template>
      <div>
        <h2>Registro</h2>
        <form @submit.prevent="register">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>    
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required>
          <button type="submit">Registrarse</button>
        </form>
      </div>
</template>
<script>


export default {
    name: 'Register',
    components: {

    }
}
</script>
  
<style scoped lang="scss"> </style>