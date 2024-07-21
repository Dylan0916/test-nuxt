<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :throttle="0" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'My Website',
  ogTitle: 'My Website',
  description: 'Hello this is my site.',
  ogDescription: 'Hello this is my site.',
  ogImage: 'https://mysite/image.png',
  twitterCard: 'summary_large_image',
})

// const nuxtApp = useNuxtApp();

// nuxtApp.hook('page:start', () => {
//   console.log('== page start ==');
// });
// nuxtApp.hook('page:finish', () => {
//   console.log('== page finish ==');
// });
</script>
