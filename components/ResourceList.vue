<template>
  <div>
    <div class="container flex h-screen w-64 flex-col gap-2 bg-gray-900">
      <NuxtLink
        v-for="r in resources"
        :key="r.id"
        :to="`/shelters/${r.id}`"
        class="h-24 bg-gray-600 p-4">
        <h3 class="text-2xl font-bold">{{ r.name }}</h3>
        <p>{{ r.resource_type }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();

const { data } = await useAsyncData("resources", async () => {
  const { data } = await supabase
    .from("resource")
    .select()
    .eq("resource_type", "Shelter");
  return data;
});

const resources = ref(data);
</script>

<style scoped>
.router-link-active {
  @apply bg-green-800 text-black;
}
</style>
