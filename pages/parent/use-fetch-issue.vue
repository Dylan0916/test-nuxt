<template>
  <div>Index</div>
  <h2>{{ data?.user }}</h2>
</template>

<script setup lang="ts">
const { data, refresh } = await useFetch<{ user: string }>(
  'https://run.mocky.io/v3/3703eaa1-336f-4aa1-8925-a98caee791d7'
);

onMounted(() => {
  refresh();
});

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
