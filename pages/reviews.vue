<template>
  <div>
    <h1>Reviews</h1>
    <div v-for="review in reviews" :key="review.id">
      <p>Rating: {{ review.rating }}</p>
      <p>Review Text: {{ review.review_text }}</p>
      <p>Service Type: {{ review.service_type }}</p>
      <p>Facility Name: {{ review.facility_name }}</p>
      <!-- Display other columns as needed -->
      <!-- <p>Experience: {{ review.experience }}</p>
      <p>Resource ID: {{ review.resource_id }}</p>
      <p>Location: {{ review.location }}</p> -->
    </div>
  </div>
</template>

<script setup>
import { useSupabaseClient } from '#imports'

const supabase = useSupabaseClient()

const { data: reviews } = await useFetch(async () => {
  const { data, error } = await supabase
    .from('reviews')
    .select('*') // Or specify the columns you want to fetch
    .order('created_at', { ascending: false })

  if (error) {
    console.error(error)
    return []
  }

  return data
})
</script>
