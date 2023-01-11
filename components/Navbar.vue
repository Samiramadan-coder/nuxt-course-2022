<template>
  <nav class="bg-purple-700 text-white shadow-lg p-3 flex justify-between">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/iphone">Iphones</NuxtLink>
    <NuxtLink to="/profile">Profile</NuxtLink>
    <p>Cart ({{ cart.length }})</p>
  </nav>
</template>

<script setup>
  const cart = useCart();
</script>