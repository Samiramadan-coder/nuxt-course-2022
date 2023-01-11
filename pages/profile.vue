<template>
  Welcome Sami
</template>

<script setup>
  definePageMeta({
    layout: "sidebar",
    middleware: ['auth'],
  });
</script>
