<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-4 gap-4 mt-10">
      <NuxtLink v-for="n in 12" :key="n" to="/iphone/iphone-12" class="shadow-lg text-center border rounded">
        <h1>IPhone 12</h1>
        <div class="flex justify-center p-4">
          <img width="150" src="/images/iphone12.jpg" alt="">
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Nuxt3 - Iphones",
});
</script>