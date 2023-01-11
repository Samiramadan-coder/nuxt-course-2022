export default defineNuxtRouteMiddleware(() => {
  const count = useCountPages();
  count.value++;
});