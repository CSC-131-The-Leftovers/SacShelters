<template>
  <div>
    <h1>Reviews</h1>
    <div v-for="review in reviews" :key="review.id">
      <p>Rating: {{ review.rating }}</p>
      <p>{{ review.review_text }}</p>
      <!-- Display other columns as needed -->
    </div>
  </div>
</template>

<script setup>
import { useSupabaseClient } from '#imports'

const supabase = useSupabaseClient()

const { data: reviews } = await useFetch(async () => {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error(error)
    return []
  }

  return data
})
</script>
