<template>
  <div>Index</div>
  <p class="red">red</p>
  <p class="blue">blue</p>
  <div class="other !text-pink-400">
    other
    <p class="other2">other2</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
.other {
  @apply !text-7xl ml-5;

  .other2 {
    @apply text-blue-500;
  }
}
</style>
