<template>
  <div class="svg-icon flex items-center justify-center transition-opacity" :class="svgClass">
    <component :is="dynamicComponent" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '',
  },
})

const svgClass = computed(() => ({
  [`text-${props.color}`]: !!props.color,
}))
const assetName = computed(() => `icons/${props.name}.svg`)

const dynamicComponent = useAsset(assetName)
</script>
