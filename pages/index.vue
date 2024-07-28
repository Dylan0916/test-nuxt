<template>
  <div>
    <div>Index</div>
    <nuxt-link v-for="link in links" :key="link" :to="`/${link}`" class="block">{{ link }}</nuxt-link>
    <button @click="onClick">Click</button>
  </div>
</template>

<script setup lang="ts">
const links = ['unocss-with-scss-issue', 'vee-validate', 'svg-before', 'svg-after', 'naive-ui-page', 'test-page']

function onClick() {
  console.log(window.history.state)
}
</script>

<style scoped lang="scss"></style>
