<template>
  <div class="m-4">
    <NuxtLink :to="localePath('/')">{{ $t('backHome') }}</NuxtLink>

    <div>
      <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
      <NuxtLink :to="switchLocalePath('zh')">繁體中文</NuxtLink>
    </div>

    <h2>{{ $t('welcome') }}</h2>
    <h3>{{ $t('about.title') }}</h3>
    <p>{{ $t('about.description') }}</p>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const i18nHead = useLocaleHead({
  addSeoAttributes: true,
});

console.log(
  '== i18nHead?.value?.htmlAttrs?.lang ==',
  i18nHead?.value?.htmlAttrs?.lang,
  i18nHead.value.link,
  i18nHead.value.meta
);

useHead({
  htmlAttrs: {
    lang: i18nHead?.value?.htmlAttrs?.lang,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
});
</script>

<style lang=""></style>
