<template>
  <slot :test="123" />
</template>
<script setup lang="ts">
defineProps(['validateOnBlur', '']);
</script>
<style lang=""></style>
