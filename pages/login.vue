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
  <div class="bg-cover bg-center min-h-screen" style="background-image: url('/stephen-leonardi-ExpyK79Dx_w-unsplash.jpg')">
    <div class="bg-black bg-opacity-50 min-h-screen flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-lg">
        <h1 class="text-3xl font-bold text-green-900 mb-6">Login</h1>
        <form @submit.prevent="signIn" class="space-y-4">
          <div>
            <label class="text-green-900 font-semibold">Email:</label>
            <input
              v-model="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              class="w-full px-4 py-2 rounded-md bg-gray-200 text-green-900"
            />
          </div>
          <div>
            <label class="text-green-900 font-semibold">Password:</label>
            <input
              v-model="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              class="w-full px-4 py-2 rounded-md bg-gray-200 text-green-900"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-500 transition-colors duration-300"
          >
            Sign In
          </button>
          <p v-if="errorMsg" class="text-red-500 mt-4">{{ errorMsg }}</p>
        </form>
      </div>
    </div>
  </div>
</template>
