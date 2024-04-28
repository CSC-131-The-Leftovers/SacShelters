<template>
  <div class="card mx-auto w-96 space-y-4 bg-neutral p-8 text-neutral-content">
    <form class="space-y-2" @submit.prevent="signUp">
      <input
        v-model="email"
        required
        type="text"
        class="input w-full"
        placeholder="Email" />
      <input
        v-model="password"
        required
        type="password"
        class="input flex w-full gap-2"
        placeholder="Password" />
      <div class="submit">
        <button class="btn btn-primary">Create an Account</button>
      </div>
    </form>
    <div class="alert alert-error">{{ errorMsg }}</div>
    <div class="alert alert-success">{{ successMsg }}</div>
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
    if (error instanceof Error) {
      errorMsg.value = error.message;
    } else {
      console.log("Unexpected error", error);
    }
  }
}
</script>
