<template>
  <form @submit.prevent="handleSubmit">
    <label>Phone Number: </label>
    <input v-model="phoneNum" type="number" required />

    <label>Message: </label>
    <input v-model="remind" type="string" required />

    <label>Date and Time: </label>
    <input v-model="dateTime" type="datetime-local" required />

    <div class="submit">
      <button type="submit">Send a message</button>
    </div>
  </form>
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
  background: grey;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: white;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
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
  padding: 10px 20px;
  margin-top: 30px;
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
