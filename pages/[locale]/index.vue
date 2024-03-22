<template>
  <div>{{ t('welcome') }}</div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['check-lang'],
});

const { t } = useI18n();

onMounted(() => {
  console.log(t('welcome'));
});
</script>
