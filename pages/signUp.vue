<template>
  <div>
    <form @submit.prevent="signUp">
      <label>Email: </label>
      <input v-model="email" type="email" required />
      <label>Password: </label>
      <input v-model="password" type="password" required />
      <div class="submit">
        <button>Create an Account</button>
      </div>
    </form>
    <p>email: {{ email }}</p>
    <p>pass: {{ password }}</p>
    <p>error: {{ errorMsg }}</p>
    <p>success: {{ successMsg }}</p>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();
const email = ref("");
const password = ref("");
const errorMsg = ref("");
const successMsg = ref("");

async function signUp() {
  try {
    const { error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    successMsg.value = "Check your email to confirm your account.";
  } catch (error) {
    errorMsg.value = error.message;
  }
}
</script>

<style scoped>
#app {
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
