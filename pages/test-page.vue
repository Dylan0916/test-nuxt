<template>
  <div>
    <button @click="onClick">Click</button>
  </div>
</template>

<script lang="ts" setup>
function onClick() {
  console.log(window.history.state)
}
</script>
