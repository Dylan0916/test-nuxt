<template>
  <div>Index</div>
  <NuxtLinkLocale to="/about">To about page</NuxtLinkLocale>
  <br />
  <NuxtLinkLocale to="/parent">To parent page</NuxtLinkLocale>
  <div>
    <Trans
      i18n-key="testKey"
      :components="components"
      :values="{ num: 1, food: 'apple' }"
    />
    <br />
    <Trans
      i18n-key="testKey2"
      :components="components"
      :values="[2, 'apple']"
    />
  </div>
</template>

<script setup lang="ts">
import Trans from '@/components/Trans.vue';
import TextContent from '@/components/TextContent.vue';

const components = computed(() => ({
  b: { type: 'b' },
  special: { type: TextContent },
}));

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
