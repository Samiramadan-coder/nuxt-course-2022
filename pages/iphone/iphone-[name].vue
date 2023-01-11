<template>
  <head>
    <title>{{ fullName }}</title>
  </head>
  <div class="flex justify-center w-full mt-20">
    <div class="grid grid-cols-2">
      <div>
        <img src="/images/iphone12.jpg" alt="">
      </div>
      <div class="text-center">
        <h1 class="text-3xl">Iphone {{ fullName }}</h1>
        <button @click="addToCart" class="p-3 bg-indigo-900 text-white rounded-md mt-5 w-48">
          <span v-if="inCart">Remove from cart</span>
          <span v-else>Buy Now</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  const cart = useCart();
  const route = useRoute();
  const fullName = computed(() => route.params.name);

  const inCart = computed(() => {
    return !!cart.value.find(ct => ct.name === fullName.value);
  });

  function addToCart() {
    if (inCart.value) {
      cart.value = cart.value.filter(ct => ct.name !== fullName.value);
    } else {
      cart.value.push({
        name: route.params.name
      });
    }
  }
</script>
