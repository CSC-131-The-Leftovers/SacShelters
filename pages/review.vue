<template>
  <div class="bg-cover bg-center min-h-screen" style="background-image: url('/stephen-leonardi-ExpyK79Dx_w-unsplash.jpg')">
    <div class="bg-black bg-opacity-50 min-h-screen flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-lg">
        <h1 class="text-3xl font-bold text-green-900 mb-6">Write a Review</h1>
        <form class="space-y-4" @submit.prevent="submitReview">
          <div>
            <label class="text-green-900 font-semibold">Facility Name:</label>
            <input
              v-model="facilityName"
              type="text"
              required
              class="w-full px-4 py-2 rounded-md bg-gray-200 text-green-900"
            />
          </div>
          <div>
            <label class="text-green-900 font-semibold">Service Type:</label>
            <select
              v-model="serviceType"
              required
              class="w-full px-4 py-2 rounded-md bg-gray-200 text-green-900"
            >
              <option value="" disabled>Select a service type</option>
              <option value="Foodbank">Foodbank</option>
              <option value="Shelters">Shelters</option>
              <option value="Medical">Medical</option>
            </select>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-yellow-400">&#9733;</span>
            <label class="text-green-900 font-semibold">Rating (1-5):</label>
          </div>
          <input
            v-model.number="rating"
            type="number"
            min="1"
            max="5"
            required
            class="w-full px-4 py-2 rounded-md bg-gray-200 text-green-900"
          />
          <div>
            <label class="text-green-900 font-semibold">Review:</label>
            <textarea
              v-model="reviewText"
              placeholder="Write your review..."
              required
              class="w-full px-4 py-2 rounded-md bg-gray-200 text-green-900"
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
  </div>
</template>

<script setup>
import { useSupabaseClient, useSupabaseUser } from '#imports'

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const facilityName = ref('')
const serviceType = ref('')
const rating = ref(0)
const reviewText = ref('')
const additionalField = ref('') // Add any additional fields you want to store

const submitReview = async () => {
  console.log('submitReview called')
  if (!user.value) {
    console.log('User not authenticated')
    return
  }

  console.log('Submitting review:', {
    id: uuidv4(), // Generate a UUID for the review ID
    user_id: user.value.id,
    rating: rating.value,
    service_type: serviceType.value,
    resource_id: null, // Update with the appropriate resource ID if available
    facilityName: facilityName.value,
    review_text: reviewText.value,
    created_at: new Date().toISOString(),
    additional_field: additionalField.value, // Include the additional field in the object
  })

  const { data, error } = await supabase
    .from('reviews')
    .insert([{
      id: uuidv4(), // Generate a UUID for the review ID
      user_id: user.value.id,
      rating: rating.value,
      service_type: serviceType.value,
      resource_id: null, // Update with the appropriate resource ID if available
      facilityName: facilityName.value,
      review_text: reviewText.value,
      created_at: new Date().toISOString(),
      additional_field: additionalField.value, // Include the additional field in the object
    }])

  if (error) {
    console.error('Error submitting review:', error)
  } else {
    console.log('Review submitted successfully')
    // Handle successful review submission
    rating.value = 0
    reviewText.value = ''
    facilityName.value = ''
    serviceType.value = ''
    additionalField.value = '' // Reset the additional field after submission
  }
}
</script>