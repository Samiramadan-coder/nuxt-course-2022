<template>
  <div class="grid grid-cols-4 gap-4 mt-10 px-10">
    <NuxtLink to="/iphone/iphone-12" class="shadow-lg text-center border rounded">
      <h1>IPhone 12</h1>
      <div class="flex justify-center p-4">
        <img width="150" src="/images/iphone12.jpg" alt="">
      </div>
    </NuxtLink>
    <NuxtLink to="/iphone/iphone-12-pro" class="shadow-lg text-center border rounded">
      <h1>IPhone 12 pro</h1>
      <div class="flex justify-center p-4">
        <img width="150" src="/images/iphone12.jpg" alt="">
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
useHead({
  title: "Nuxt3 - Iphones",
});
</script>