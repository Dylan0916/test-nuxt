<template>
  <div>
    <h2>我的優惠</h2>
    <NTabs size="large" default-value="newest" :tabs-padding="20" tab-style="padding: 20px 16px;">
      <NTabPane name="newest" tab="最新"> 最新 </NTabPane>
      <NTabPane name="histories" tab="歷史紀錄"> 歷史紀錄 </NTabPane>
    </NTabs>
    <hr />
    <n-space vertical justify="center" class="w-50% ml-5">
      <div class="relative py-2 left-9px w-[calc(100%-18px)]">
        <p v-for="n in 5" :key="n" class="absolute m-0 -translate-x-1/2" :style="{ left: `${(n - 1) * 25}%` }">{{ '$'.repeat(n) }}</p>
        <p class="m-0 opacity-0">$</p>
      </div>
      <n-slider v-model:value="value" range :marks="marks" step="mark" />
      <p>{{ value }}</p>
      <p>{{ formattedValue }}</p>
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { NTabs, NTabPane, NInput, NSpace, NSlider } from 'naive-ui'

const options = [
  {
    title: 'HKD 0 - HKD 100',
    min: '0.00',
    max: '100.00',
  },
  {
    title: 'HKD 101 - HKD 300',
    min: '101.00',
    max: '300.00',
  },
  {
    title: 'HKD 301 - HKD 550',
    min: '301',
    max: '550',
  },
  {
    title: 'HKD 551 - HKD 1000',
    min: '551.00',
    max: '1000.00',
  },
  {
    title: 'More than HKD 1,000',
    min: '1001.00',
    max: '0.00',
  },
]

const value = ref([0, 100])

const marks = computed(() => {
  const len = options.length
  const step = 100 / (len - 1)
  const list = new Array(len).fill('')

  return list.reduce((acc, _cur, index) => ({ ...acc, [index * step]: index }), {})
})

const formattedValue = computed(() => {
  const [min, max] = value.value
  const minIndex = marks.value[min]
  const maxIndex = marks.value[max]
  const minOption = options[minIndex]
  const maxOption = options[maxIndex]
  const minPrice = minOption.min
  const maxPrice = maxIndex === options.length - 1 ? maxOption.min : maxOption.max

  return `HKD ${minPrice} ~ HKD ${maxPrice}`
})
</script>
