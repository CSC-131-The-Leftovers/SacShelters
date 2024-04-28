<template>
  <form @submit.prevent="signUp">
    <label>Email: </label>
    <input type="email" required v-model = "email">

    <label>Password: </label>
    <input type="password" required v-model = "password">

    <div class = "submit">
    <button>Create an Account</button>
  </div>

  </form>
  <p>email: {{ email }}</p>
  <p>pass: {{ password }}</p>
  <p>error: {{ errorMsg }}</p>
  <p>success: {{ successMsg }}</p>

  
</template>

<script setup lang="ts">

const supabase = useSupabaseClient()
const email = ref("")
const password = ref(null)
const errorMsg = ref(null)
const successMsg = ref(null)

async function signUp() {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    })
    if (error) throw error;
    successMsg.value = "Check your email to confirm your account."
  } catch (error) {
    errorMsg.value = error.message;
  }
}

</script>

<style scoped>
 #app{
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
 }
 body {
  margin: 0;
  background: #eee;
 }

</style>