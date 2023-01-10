<template>
  <nav class="bg-purple-700 text-white">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="about">About</NuxtLink>
    <NuxtLink to="profile">Profile</NuxtLink>
  </nav>

  <!-- Nuxt will replace page content -->
  <slot />
  
</template>