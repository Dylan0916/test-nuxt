<template>
  <button class="btn">Base</button>
</template>

<script setup lang="ts">
import { getInfo } from '@/service';

const instance = getCurrentInstance();

// await getInfo();

// await useTest();
// await useTest();

// console.log('== BaseButton ==', getCurrentInstance());

onMounted(() => {
  console.log('== BaseButton onMounted ==');
  console.log(instance);
});
</script>

<style scoped>
.btn {
  background: lightblue;
  border: solid 1px black;
}
</style>
