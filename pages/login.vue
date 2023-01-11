<template>
  <div class="p-4">
    <p class="bg-red-500 text-red-300 text-sm p-3 mb-5" v-if="_error">{{ _error }}</p>
    <form @submit.prevent="onSubmit">
      <input type="text" class="border p-2" v-model="form.email" />
      <br />
      <br />
      <input type="password" class="border p-2" v-model="form.password" />
      <br />
      <br />
      <button class="bg-indigo-700 text-white py-2 px-6 rounded-md">
        <span v-if="loading">Loading...</span>
        <span v-else>Login</span>
      </button>
    </form>
  </div>
</template>

<script setup>
const url = "https://reqres.in/api/login";
const loading = ref(false);
const _error = ref(null);

const form = reactive({
  email: "eve.holt@reqres.in",
  password: "cityslicka"
});

async function onSubmit() {
  if (loading.value) return;

  loading.value = true;
  const {data, error} = await useFetch(url, {
    method: "post",
    body: form
  });
  loading.value = false;

  if (error.value) {
    _error.value = error.value.data.error;
    return;
  };

  const auth = useAuth();
  auth.value.isAuthenticated = true;

  navigateTo("/");
};
</script>
