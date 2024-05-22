<template>
  <div>Index</div>
  <button @click="onClick">Click</button>
  <button @click="onClick2">Click2</button>
</template>

<script setup lang="ts">
const router = useRouter()

const route = useRoute()

watch(
  () => route,
  (newRoute) => {
    console.log(newRoute)
  },
  { deep: true, immediate: true }
)

function onClick() {
  router.push({ hash: '#page1' })
}
function onClick2() {
  router.push({ hash: '#page2' })
}
</script>

<style scoped>
.box {
  display: flex;
  align-items: center;
}
</style>
