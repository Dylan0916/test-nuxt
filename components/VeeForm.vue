<template>
  <slot :test="123" />
</template>
<script setup lang="ts">
const props = defineProps(['validateOnBlur', '']);

console.log({
  validateOnBlur: props.validateOnBlur,
  validateOnChange: props.validateOnChange,
});
</script>
<style lang=""></style>
