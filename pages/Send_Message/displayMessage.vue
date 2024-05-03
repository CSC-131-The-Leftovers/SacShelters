<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup>
const client = useSupabaseClient();

const { data: message, error } = useAsyncData("messages", async () => {
  const { data, error } = await client
    .from("Messages")
    .select("phone_number")
    .order("dateTime", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data;
});
</script>

<style></style>
