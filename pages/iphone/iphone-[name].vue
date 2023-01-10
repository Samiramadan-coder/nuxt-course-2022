<template>
  <p>I phone {{ name }}</p>
</template>

<script setup>

const route = useRoute();
const name = computed(() => route.params.name);

</script>