<template>
  <div>
    <NInput v-for="(_, index) in inputs" :key="index" v-model:value="inputs[index]" ref="inputRefs" @focus="handleFocus(index)" />
    <h3>{{ inputs }}</h3>
  </div>
</template>

<script setup lang="ts">
import { NTabs, NTabPane, NInput, NSpace, NSlider } from 'naive-ui'

const inputs = reactive(['', '', '', ''])
const inputRefs = ref<(typeof NInput)[]>([])

function handleFocus(index: number) {
  const foundFirstEmptyIndex = inputs.findIndex((v) => !v)
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
