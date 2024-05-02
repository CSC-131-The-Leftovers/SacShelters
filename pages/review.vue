<template>
  <div class="bg-green-900 min-h-screen flex items-center justify-center">
    <div class="bg-green-800 p-8 rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold text-white mb-6">Write a Review</h1>
      <form @submit.prevent="submitReview" class="space-y-4">
        <div>
          <label class="text-white font-semibold">Rating (1-5):</label>
          <input
            type="number"
            v-model.number="rating"
            min="1"
            max="5"
            required
            class="w-full px-4 py-2 rounded-md bg-green-700 text-white"
          />
        </div>
        <div>
          <label class="text-white font-semibold">Review:</label>
          <textarea
            v-model="reviewText"
            placeholder="Write your review..."
            required
            class="w-full px-4 py-2 rounded-md bg-green-700 text-white"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          :disabled="!user"
          class="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-500 transition-colors duration-300"
        >
          Submit Review
        </button>
      </form>
    </div>
  </div>
</template>


<script setup>
import { useSupabaseClient, useSupabaseUser } from '#imports'

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const rating = ref(0)
const reviewText = ref('')

const submitReview = async () => {
  if (!user.value) {
    // Handle case where user is not authenticated
    return
  }

  const { data, error } = await supabase
    .from('reviews')
    .insert([{
      user_id: user.value.id,
      rating: rating.value,
      review_text: reviewText.value,
      // Add other columns as needed
      // experience: 'Great experience!',
      // service_type: 'Shelter',
      // resource_id: 1,
      // location: 'Sacramento, CA',
    }])

  if (error) {
    // Handle error
    console.error(error)
  } else {
    // Handle successful review submission
    rating.value = 0
    reviewText.value = ''
    // Show success message or redirect to review list page
  }
}

</script>

