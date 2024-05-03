<template>
  <div class="flex w-1/3 flex-wrap">
    <div class="w-full p-1 md:p-2">
      <NuxtImg
        class="block h-full w-full rounded-lg object-cover object-center"
        :alt="alt"
        format="webp"
        :src="src" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});
</script>
