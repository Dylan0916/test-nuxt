<template>
  <h1>Private</h1>
  <button @click="execute()">Trigger</button>
</template>

<script setup lang="ts">
const headers = useRequestHeaders(['cookie']);
const event = useRequestEvent();

console.log('== headers ==', headers);
console.log('== event ==', event);

const { execute } = await useFetch('http://localhost:3001/api/private-route', {
  credentials: 'include',
  headers,
});
// const resp = await useFetch('/api/private-route', {});
</script>

<style></style>
