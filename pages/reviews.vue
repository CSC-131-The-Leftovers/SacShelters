<template>
  <div class="bg-cover bg-center min-h-screen" style="background-image: url('/stephen-leonardi-ExpyK79Dx_w-unsplash.jpg')">
    <div class="bg-black bg-opacity-50 min-h-screen">
      <div class="max-w-4xl mx-auto py-12">
        <h1 class="text-3xl font-bold text-white mb-6 text-center">Reviews</h1>
        <div v-if="reviews.length > 0">
          <div v-for="review in reviews" :key="review.id" class="mb-8">
            <div class="bg-white rounded-lg shadow-md p-6">
              <!-- Review Header -->
              <div class="flex justify-between items-center mb-4">
                <div class="flex items-center">
                  <!-- Display rating stars -->
                  <div class="flex items-center mr-2">
                    <span v-for="star in review.rating" :key="star" class="text-yellow-400 text-lg">&#9733;</span>
                    <span v-for="star in 5 - review.rating" :key="star" class="text-gray-400 text-lg">&#9733;</span>
                  </div>
                  <!-- Display service type -->
                  <p class="text-lg text-gray-500">{{ review.service_type }}</p>
                </div>
                <!-- Display facility name -->
                <p class="text-lg text-gray-500">Facility: {{ review.facilityName }}</p>
                <!-- Display date -->
                <p class="text-lg text-gray-500">{{ formatDate(review.created_at) }}</p>
              </div>
              <!-- Review Text -->
              <p class="text-gray-800">{{ review.review_text }}</p>
            </div>
          </div>
        </div>
        <div v-else class="text-white text-center">No reviews found.</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSupabaseClient, onMounted } from '#imports'

// Import Supabase client
const supabase = useSupabaseClient()

// Define a reactive variable to store reviews
const reviews = ref([])

// Fetch reviews from Supabase database
onMounted(async () => {
  try {
    // Fetch reviews data from Supabase
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching reviews:', error.message)
      return
    }

    // Update the reviews array with fetched data
    reviews.value = data || []
  } catch (error) {
    console.error('Error fetching reviews:', error.message)
  }
})

// Format date function
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
