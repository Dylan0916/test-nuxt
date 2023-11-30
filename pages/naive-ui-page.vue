<template>
  <div>
    <h2>我的優惠</h2>
    <NInput v-model:value="value" type="text" placeholder="Basic Input" />
    <NTabs
      size="large"
      default-value="newest"
      :tabs-padding="20"
      tab-style="padding: 20px 16px;"
    >
      <NTabPane name="newest" tab="最新"> 最新 </NTabPane>
      <NTabPane name="histories" tab="歷史紀錄"> 歷史紀錄 </NTabPane>
    </NTabs>
  </div>
</template>

<script setup lang="ts">
import { NTabs, NTabPane, NInput } from 'naive-ui';
</script>
