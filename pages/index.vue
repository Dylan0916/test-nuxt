<template>
  <div>Index</div>
  <div>
    {{ mainStore.counter }}
    <button @click="mainStore.increment">+</button>
    {{ data }}
  </div>
  <VeeForm :validateOnBlur="false" validateOnChange="false">
    <h1>VeeForm,</h1>
  </VeeForm>

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
  title: 'About Page',
  description: 'this is index',
});
// useHead({
//   title: 'About Page',
//   meta: [{ name: 'description', content: 'this is index' }],
// });
</script>

<style lang=""></style>
