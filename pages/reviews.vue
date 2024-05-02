<template>
  <div class="bg-cover bg-center min-h-screen" style="background-image: url('/stephen-leonardi-ExpyK79Dx_w-unsplash.jpg')">
    <div class="bg-black bg-opacity-50 min-h-screen">
      <div class="max-w-4xl mx-auto py-12">
        <h1 class="text-3xl font-bold text-white mb-6 text-center">Reviews</h1>
        <div v-if="reviews.length > 0">
          <div v-for="review in reviews" :key="review.id" class="mb-4 p-4 bg-white rounded-lg shadow-md">
            <div class="flex items-center mb-2">
              <div class="flex items-center mr-2">
                <span v-for="star in review.rating" :key="star" class="text-yellow-400">&#9733;</span>
                <span v-for="star in 5 - review.rating" :key="star" class="text-gray-400">&#9733;</span>
              </div>
              <p class="text-sm text-gray-500">{{ review.service_type }}</p>
            </div>
            <p class="text-gray-800">{{ review.review_text }}</p>
            <p class="text-sm text-gray-500">Facility: {{ review.facility_name }}</p>
            <p class="text-sm text-gray-500">facilityName: {{ review.facilityName }}</p>
            <p class="text-sm text-gray-500">Experience: {{ review.experience }}</p>
            <p class="text-sm text-gray-500">User ID: {{ review.user_id }}</p>
          </div>
        </div>
        <div v-else class="text-white text-center">No reviews found.</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSupabaseClient, useFetch, onMounted } from '#imports'

const supabase = useSupabaseClient()
const reviews = ref([])

onMounted(async () => {
  const { data, error } = await useFetch(async () => {
    const { data: reviewsData, error: fetchError } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false })

    if (fetchError) {
      console.error(fetchError)
      return []
    }

    return reviewsData
  })

  if (error.value) {
    console.error(error.value)
  } else {
    reviews.value = data.value
  }
})
</script>
