<template>
  <div>
    <button @click="moveToAbout">Take me to About Page</button>
    Hello index!
  </div>
</template>

<script setup>
  function moveToAbout() {
    navigateTo("/about");
  };
</script> 
