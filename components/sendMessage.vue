<template>
  <div>
    <h1 class="text-3xl font-bold text-green-900 mb-6">Send Message</h1>
    <form class="space-y-4" @submit.prevent="handleSubmit">
      <div>
        <label class="text-green-900 font-semibold">Phone Number:</label>
        <input
          v-model="phoneNum"
          type="number"
          required
          placeholder="Enter phone number"
          class="w-full px-4 py-2 rounded-md bg-gray-200 text-green-900"
        />
      </div>

      <div>
        <label class="text-green-900 font-semibold">Message:</label>
        <input
          v-model="remind"
          type="string"
          required
          placeholder="Enter your message"
          class="w-full px-4 py-2 rounded-md bg-gray-200 text-green-900"
        />
      </div>

      <div>
        <label class="text-green-900 font-semibold">Date and Time:</label>
        <input
          v-model="dateTime"
          type="datetime-local"
          required
          class="w-full px-4 py-2 rounded-md bg-gray-200 text-green-900"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-500 transition-colors duration-300"
      >
        Send a message
      </button>
    </form>
    <p>phoneNum: {{ phoneNum }}</p>
    <p>pass: {{ remind }}</p>
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
