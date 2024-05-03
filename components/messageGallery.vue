<template>
  <section class="overflow-hidden text-gray-700">
    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div class="-m-1 flex flex-wrap md:-m-2">
        <message
          v-for="message in message"
          :phone_num="message.phone_number"
          :dateTime="message.dateTime"
          :message="message.message"
          :key="message.id" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  message: {
    type: Array,
    required: true,
  },
});
</script>
