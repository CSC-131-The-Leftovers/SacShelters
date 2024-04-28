<template>
  <form @submit.prevent="handleSubmit">
    <label>Phone Number: </label>
    <input v-model="phoneNum" type="integer" required />

    <label>Message: </label>
    <input v-model="Message" type="string" required />

    <div class="submit">
      <button>Send a message</button>
    </div>
  </form>
  <p>phoneNum: {{ phoneNum }}</p>
  <p>pass: {{ Message }}</p>
</template>

<script>
export default {
  data() {
    return {
      phoneNum: "",
      Message: "",
    };
  },
  methods: {
    handleSubmit() {
      fetch("https://textbelt.com/text", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: phoneNum,
          message: Message,
          key: "textbelt",
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
    },
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
