<template>
  <div>
    <p class="text-2xl font-bold">Name: {{ resource }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ id: string }>();
console.log(props.id);

const supabase = useSupabaseClient();

const { data: resource } = await useAsyncData("resources", async () => {
  const { data } = await supabase.from("resource").select().eq("id", props.id);
  return data;
});
</script>

<style scoped></style>
