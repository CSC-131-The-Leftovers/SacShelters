<template>
  <div class="p-4">
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
