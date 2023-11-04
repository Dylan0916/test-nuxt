<template>
  <div>
    <p>{{ msg }} | {{ count }}</p>
    <button @click="changeMsg">change msg</button>
    <TestButton />
  </div>
</template>

<script setup lang="ts">
defineProps<{ count: number }>();

const msg = ref('123');

function changeMsg() {
  msg.value += '!';
}

definePageMeta({
  layout: 'main',
});

useSeoMeta({
  title: 'Test Page',
  description: 'this is desc',
});
</script>

<style></style>
