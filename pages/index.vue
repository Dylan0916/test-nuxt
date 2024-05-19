<template>
  <div>Index</div>
  <div class="box">
    <p>1111</p>
    <svg-icon :name="svgName" style="width: 28px" />
    <svg-icon name="download" style="width: 28px" />
    <p>22222</p>
  </div>
  <button @click="flag = !flag">Click</button>
  <h3>{{ flag }}</h3>
</template>

<script setup lang="ts">
import SvgIcon from '../components/svg-icon.vue'

useSeoMeta({
  title: 'Index Page2',
  description: 'this is index',
})

const flag = ref(false)

const svgName = computed(() => flag.value ? 'arrow-up' : 'arrow-down')
</script>

<style scoped>
.box {
  display: flex;
  align-items: center;
}
</style>
