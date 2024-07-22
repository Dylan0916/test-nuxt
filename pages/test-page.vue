<template>
  <div>
    <button @click="onClick">Click</button>
  </div>
</template>

<script lang="ts" setup>
const testCookie = useCookie<Record<'redirectUrl' | 'fallback', string> | undefined>('test-cookie-name', { path: '/', maxAge: 60 })

watchEffect(() => {
  console.log('== testCookie ==', testCookie.value)
})

function onClick() {
  testCookie.value = { redirectUrl: 'https://www.google.com', fallback: 'https://www.bing.com' }
}
</script>
