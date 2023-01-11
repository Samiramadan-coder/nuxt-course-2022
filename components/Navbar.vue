<template>
  <div class="bg-primary">
    <nav class="container text-white p-3 flex justify-between">
      <div class="flex gap-6">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/iphone">Iphones</NuxtLink>
        <p>Cart ({{ cart.length }})</p>
        <p>Total Pages visited: {{ pages }}</p>
      </div>
      <div v-if="auth.isAuthenticated">
        <NuxtLink to="/profile">Profile</NuxtLink>
        <button class="ml-2" @click="logout">Logout</button>
      </div>
      <NuxtLink to="/login" v-else>Login</NuxtLink>
    </nav>
  </div>
</template>

<script setup>
  const cart = useCart();
  const auth = useAuth();
  const pages = useCountPages();

  function logout() {
    auth.value.isAuthenticated = false;
    navigateTo("/login")
  };
</script>
