<template>
  <div class="navbar bg-neutral">
    <div class="navbar-start">
      <NuxtLink
        to="/"
        class="btn btn-ghost flex items-center text-xl text-primary">
        <img
          src="/THE HOMELY FOUNDATION (1).png"
          alt="Logo"
          class="mr-1 h-10" />
        SacShelters
      </NuxtLink>
    </div>
    <div class="join navbar-end space-x-4">
      <NuxtLink class="btn btn-primary" to="/send_message/message">
        Message
      </NuxtLink>
      <NuxtLink class="btn btn-primary" to="/review">Write Review</NuxtLink>
      <NuxtLink class="btn btn-primary" to="/reviews">View Reviews</NuxtLink>
      <NuxtLink class="btn btn-primary" to="/signUp"> Sign up </NuxtLink>
      <NuxtLink class="btn btn-primary" to="/login">Log in</NuxtLink>
    </div>
  </div>
</template>
