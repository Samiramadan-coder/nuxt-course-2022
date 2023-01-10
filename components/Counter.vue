<template>
  <button @click="increment">Increment</button>
  <p>{{ count }}</p>
  <button @click="Decrement">Decrement</button>
</template>
  
<script setup>
  const count = ref(0);

  function increment() {
    count.value++;
  };

  function Decrement() {
    count.value--;
  };
</script>
