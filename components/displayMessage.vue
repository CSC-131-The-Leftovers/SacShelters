<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script>
const client = useSupabaseClient();

const { data: Messages } = await useAsyncData("Messages", async () =>
  client.from("Messages").select("*").order("dateTime"),
);

console.log(Messages.value);
console.log("test");
</script>

<style></style>
