<template>
  <div>Index</div>
  <NuxtLink to="/zh">zh</NuxtLink>
  <hr />
  <NuxtImg
    size="100%"
    src="/husky.jpeg"
    format="webp"
    :placeholder="[500, 580, 10]"
  />
</template>

<script setup lang="ts">
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
