<template>
  <div class="bg-green-900 min-h-screen flex items-center justify-center">
    <div class="bg-green-800 p-8 rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold text-white mb-6">Write a Review</h1>
      <form @submit.prevent="submitReview" class="space-y-4">
        <div>
          <label class="text-white font-semibold">Facility Name:</label>
          <input
            type="text"
            v-model="facilityName"
            required
            class="w-full px-4 py-2 rounded-md bg-green-700 text-white"
          />
        </div>
        <div>
          <label class="text-white font-semibold">Service Type:</label>
          <select
            v-model="serviceType"
            required
            class="w-full px-4 py-2 rounded-md bg-green-700 text-white"
          >
            <option value="" disabled>Select a service type</option>
            <option value="Foodbank">Foodbank</option>
            <option value="Shelters">Shelters</option>
            <option value="Medical">Medical</option>
          </select>
        </div>
        <div class="flex items-center space-x-2">
          <span class="text-yellow-400">&#9733;</span>
          <label class="text-white font-semibold">Rating (1-5):</label>
        </div>
        <input
          type="number"
          v-model.number="rating"
          min="1"
          max="5"
          required
          class="w-full px-4 py-2 rounded-md bg-green-700 text-white"
        />
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
