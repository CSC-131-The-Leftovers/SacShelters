<template>
  <div>
    <p class="text-4xl font-bold">{{ resource.name }}</p>
    <p v-if="resource.address" class="text-2xl">
      Address: {{ resource.address }}
    </p>
    <!-- <p>Raw info: {{ resource }}</p> -->
    <p>Reviews: {{ reviews }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ id: string }>();
console.log(props.id);

const supabase = useSupabaseClient();

const { data: resource } = await useAsyncData("resource_details", async () => {
  const { data } = await supabase.from("resource").select().eq("id", props.id);
  return data![0];
});

const { data: reviews } = await useAsyncData("reviews", async () => {
  const { data } = await supabase
    .from("reviews")
    .select()
    .eq("resource_id", props.id);
  return data;
});
</script>

<style scoped></style>
