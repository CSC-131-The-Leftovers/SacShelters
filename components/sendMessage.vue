<template>
  <div class="bg-cover bg-center min-h-screen" style="background-image: url('/stephen-leonardi-ExpyK79Dx_w-unsplash.jpg')">
    <div class="bg-black bg-opacity-50 min-h-screen flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-lg">
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
      try {
        const { data, error } = await supabase.from("Messages").insert([
          {
            phone_number: phoneNum.value,
            message: remind.value,
            dateTime: dateTime.value,
          },
        ]);

        if (error) {
          console.error("Error adding reminder:", error.message);
        } else {
          console.log("Reminder added successfully:", data);
          alert("Reminder added successfully!");
          // Clear input fields after successful submission if needed
          phoneNum.value = "";
          remind.value = "";
          dateTime.value = "";
        }
      } catch (error) {
        console.error("Error adding reminder:", error.message);
      }
    };

    // Function to activate reminders at the specified time and remove them after sending
    const activateReminders = async () => {
      const currentTime = new Date().toISOString();
      try {
        const { data, error } = await supabase
          .from("Messages")
          .select()
          .lte("dateTime", currentTime);

        if (error) {
          console.error("Error activating reminders:", error);
          return;
        }

        if (data && data.length > 0) {
          data.forEach(async (reminder) => {
            console.log("Activating reminder:", reminder);
            // Send a message
            try {
              const response = await fetch("https://textbelt.com/text", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  phone: reminder.phone_number,
                  message: reminder.message,
                  key: "036cc0b0e840bcbf56983e97475c379b48e290a4c4VAElcfsgfeOOtAt2XWjJszu",
                }),
              });

              const responseData = await response.json();
              console.log("Message sent:", responseData);

              // Remove the sent message from the database
              const { error } = await supabase
                .from("Messages")
                .delete()
                .eq("phone_number", reminder.phone_number);

              if (error) {
                console.error("Error removing message:", error);
              } else {
                console.log("Message removed successfully");
              }
            } catch (error) {
              console.error("Error sending message:", error);
            }
          });
        }
      } catch (error) {
        console.error("Error activating reminders:", error);
      }
    };

    // Schedule the activateReminders function to run every minute
    setInterval(activateReminders, 60000);

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
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #555;
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
