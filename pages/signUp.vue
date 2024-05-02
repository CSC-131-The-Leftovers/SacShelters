<template>
  <div class="bg-cover bg-center min-h-screen" style="background-image: url('/stephen-leonardi-ExpyK79Dx_w-unsplash.jpg')">
    <div class="bg-black bg-opacity-50 min-h-screen flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-lg">
        <h1 class="text-3xl font-bold text-green-900 mb-6">Sign Up</h1>
        <form class="space-y-4" @submit.prevent="signUp">
          <div>
            <label class="text-green-900 font-semibold">Email:</label>
            <input
              v-model="email"
              required
              type="text"
              placeholder="Enter your email"
              class="w-full px-4 py-2 rounded-md bg-gray-200 text-green-900"
            />
          </div>
          <div>
            <label class="text-green-900 font-semibold">Password:</label>
            <input
              v-model="password"
              required
              type="password"
              placeholder="Enter your password"
              class="w-full px-4 py-2 rounded-md bg-gray-200 text-green-900"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-500 transition-colors duration-300"
          >
            Create an Account
          </button>
        </form>
        <div v-if="errorMsg" class="text-red-500 mt-4">{{ errorMsg }}</div>
        <div v-if="successMsg" class="text-green-500 mt-4">{{ successMsg }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();
const email = ref("");
const password = ref("");
const errorMsg = ref("");
const successMsg = ref("");

async function signUp() {
  errorMsg.value = "";
  successMsg.value = "";
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
