<template>
  <div>
    <div class="flex h-screen w-64 flex-col gap-2 bg-base-200 p-2">
      <p>{{ googleMaps }}</p>
      <NuxtLink
        v-for="r in resources"
        :key="r.id"
        :to="`/shelters/${r.id}`"
        class="card h-24 bg-neutral p-4 text-neutral-content">
        <h3 class="text-2xl font-bold">{{ r.name }}</h3>
        <p>{{ r.resource_type }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="js">
const supabase = useSupabaseClient();

const { data: resources } = await useAsyncData("resources", async () => {
  const { data } = await supabase
    .from("resource")
    .select()
    .eq("resource_type", "Shelter");
  return data;
});

const { data: googleMaps } = await useFetch("/api/googleMaps");

// const resources = ref(data);
</script>

<style scoped>
.router-link-active {
  @apply bg-secondary text-secondary-content;
}
</style>
