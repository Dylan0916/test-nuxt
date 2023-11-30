<template>
  <div>Index</div>
  <BaseButton />
  <NuxtLinkLocale to="/about">To about page</NuxtLinkLocale>
  <br />
  <NuxtLinkLocale to="/parent">To parent page</NuxtLinkLocale>
</template>

<script setup lang="ts">
import { getInfo } from '@/service';
import { useTest } from '@/composables/useTest';
const instance = getCurrentInstance();

// await useTest();

// await getInfo();

// onMounted(() => {
//   console.log('== onMounted ==');
//   console.log(instance);
// });

useSeoMeta({
  title: 'Index Page2',
  description: 'this is index',
});
</script>

<style scoped>
.img-box {
  width: 100px;
  height: 200px;
}
</style>
