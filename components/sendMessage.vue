<template>
  <div
    class="min-h-screen bg-cover bg-center"
    style="
      background-image: url(&quot;/stephen-leonardi-ExpyK79Dx_w-unsplash.jpg&quot;);
    ">
    <div
      class="flex min-h-screen items-center justify-center bg-black bg-opacity-50">
      <div class="rounded-lg bg-white p-8 shadow-lg">
        <h1 class="mb-6 text-3xl font-bold text-green-900">Send Message</h1>
        <form class="space-y-4" @submit.prevent="handleSubmit">
          <div>
            <label class="font-semibold text-green-900">Phone Number:</label>
            <input
              v-model="phoneNum"
              type="number"
              required
              placeholder="Enter phone number"
              class="w-full rounded-md bg-gray-200 px-4 py-2 text-green-900" />
          </div>

          <div>
            <label class="font-semibold text-green-900">Message:</label>
            <input
              v-model="remind"
              type="string"
              required
              placeholder="Enter your message"
              class="w-full rounded-md bg-gray-200 px-4 py-2 text-green-900" />
          </div>

          <div>
            <label class="font-semibold text-green-900">Date and Time:</label>
            <input
              v-model="dateTime"
              type="datetime-local"
              required
              class="w-full rounded-md bg-gray-200 px-4 py-2 text-green-900" />
          </div>

          <button
            type="submit"
            class="w-full rounded-md bg-green-600 py-2 font-semibold text-white transition-colors duration-300 hover:bg-green-500">
            Send a message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const supabase = useSupabaseClient();
export default {
  setup() {
    const phoneNum = ref("");
    const remind = ref("");
    const dateTime = ref("");

    const supabase = useSupabaseClient();

    const handleSubmit = async () => {
      // Your existing handleSubmit logic goes here
    };

    // Your existing activateReminders logic goes here

    return {
      phoneNum,
      remind,
      dateTime,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
}
label {
  color: #555;
  display: inline-block;
  margin: 15px 0 5px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 5px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 5px 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
