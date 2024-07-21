<template>
  <div>
    <NInput v-for="(_, index) in inputs" :key="index" v-model:value="inputs[index]" class="max-w-50%" ref="inputRefs" @focus="handleFocus(index)" />
    <h3>{{ inputs }}</h3>
    <hr />
    <div class="skeleton-card w-50%">
      <n-skeleton class="w-360px h-135px rounded" />
      <n-skeleton class="mt-2 rounded" text />
      <n-skeleton class="mt-2 rounded w-60%" text />
    </div>
    <div class="skeleton-card w-50%">
      <n-skeleton class="w-360px h-135px rounded" />
      <n-skeleton class="mt-2 rounded" text />
      <n-skeleton class="mt-2 rounded w-60%" text />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NInput, NSkeleton } from 'naive-ui'

const inputs = reactive(['', '', '', ''])
const inputRefs = ref<(typeof NInput)[]>([])

function handleFocus(index: number) {
  const foundFirstEmptyIndex = inputs.findIndex(v => !v)
  const focusIndex = foundFirstEmptyIndex === -1 ? inputRefs.value.length - 1 : foundFirstEmptyIndex

  if (focusIndex !== index) {
    nextTick(() => {
      inputRefs.value[index].blur()
      inputRefs.value[focusIndex]?.focus()
    })
  }
  console.log('== index ==', { index, focusIndex, foundFirstEmptyIndex })
}
</script>
