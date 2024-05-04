<template>
  <div>
    <div class="h-full w-96 bg-base-200">
      <div class="w-full bg-primary py-2">
        <input
          v-model="zip"
          type="text"
          class="input input-primary w-auto"
          placeholder="zip code"
          @keyup.enter="getMapsData" />
      </div>
        <NuxtLink
          v-for="r in mapsData"
          :key="r['place_id']"
          :to="`/shelters/${r['place_id']}`"
          class="card m-2 bg-neutral p-2 text-neutral-content">
          <p class="text-xl font-bold">{{ r["name"] }}</p>
          <!-- {{ r }} -->
        </NuxtLink>
      </div>
      <!-- <NuxtLink
        v-for="r in resources"
        :key="r.id"
        :to="`/shelters/${r.id}`"
        class="card h-24 bg-neutral p-4 text-neutral-content">
        <h3 class="text-2xl font-bold">{{ r.name }}</h3>
        <p>{{ r.resource_type }}</p>
      </NuxtLink> -->
    </div>
  </div>
</template>

<script setup lang="js">
// const supabase = useSupabaseClient();

// const { data: resources } = await useAsyncData("resources", async () => {
//   const { data } = await supabase
//     .from("resource")
//     .select()
//     .eq("resource_type", "Shelter");
//   return data;
// });

const zip = useState("zip");

const mapsData = useState("mapsData");

async function getMapsData() {
  const { data } = await useFetch("/api/googleMaps/textSearch", {
    query: {
      query: `homeless shelters near ${zip.value}`,
    },
  });
  mapsData.value = data;
}

// const resources = ref(data);
</script>

<style scoped>
.router-link-active {
  @apply bg-secondary text-secondary-content;
}
</style>
