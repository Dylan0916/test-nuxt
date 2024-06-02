<template>
  <div>Index</div>
  <nuxt-link v-for="link in links" :key="link" :to="`/${link}`" class="block">{{ link }}</nuxt-link>
</template>

<script setup lang="ts">
const links = ['unocss-with-scss-issue', 'vee-validate']
</script>

<style scoped lang="scss"></style>
