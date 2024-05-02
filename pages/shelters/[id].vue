<template>
  <div class="p-4">
    <h1 class="text-4xl font-bold">id: {{ id }}</h1>
    <resource-details :id="`${id}`"></resource-details>
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;

definePageMeta({
  layout: "resources",
});
</script>

<style scoped></style>
