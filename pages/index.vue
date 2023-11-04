<template>
  <div>Index</div>
  <img src="@/assets/images/husky.webp" width="100" />
  <NuxtImg fit="cover" width="200" height="100" src="/husky.webp" />

  <NuxtLink to="/about">To about page</NuxtLink>
  <br />
  <NuxtLink to="/parent">To parent page</NuxtLink>
</template>

<script setup lang="ts">
// import useCounter from '@/composables/useCounter';
import useMainStore from '@/stores/useMainStore';

const mainStore = useMainStore();

const { data } = useFetch(
  'https://run.mocky.io/v3/a0da0e8e-f349-47ff-a8e8-e4e8eaa813c7',
  { query: { id: mainStore.counter } }
);

// definePageMeta({
//   layout: 'main',
// });

// const counter = useCounter();

// function clearCounter() {
//   clearNuxtState('counter');
// }

useSeoMeta({
  title: 'Index Page',
  description: 'this is index',
});
</script>

<style scoped>
.img-box {
  width: 100px;
  height: 200px;
}
</style>
