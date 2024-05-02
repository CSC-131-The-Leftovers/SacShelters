<script setup lang="ts">
const supabase = useSupabaseClient();
const email = ref("");
const password = ref("");
const errorMsg = ref("");

async function signIn() {
  try {
    supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
  } catch (error) {
    errorMsg.value = error.message;
  }
}
</script>
<template>
  <div>
    <section>
      <form @submit.prevent="signIn">
        <input v-model="email" type="email" name="email" placeholder="Email" />
        <input
          v-model="password"
          type="text"
          name="password"
          placeholder="Password" />
      </form>
    </section>
  </div>
</template>
