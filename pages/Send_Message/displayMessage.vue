<template>
  <div>
    <messageGallery :message="message" />
  </div>
</template>

<script setup>
const messages = ref([]);
const supabase = useSupabaseClient();
const props = defineProps({
  messages: {
    type: Array,
    default: () => [],
  },
});
const fetchData = async () => {
  try {
    const { data, error } = await supabase.from("Messages").select("*");
    if (error) {
      console.error("Error fetching data:", error.message);
    } else {
      console.log("Data fetched successfully:", data);
      // Assign the fetched data to the messages ref
      messages.value = data || [];
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
// Call fetchData function when the component is mounted
onMounted(() => {
  fetchData();
});
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}
</style>
