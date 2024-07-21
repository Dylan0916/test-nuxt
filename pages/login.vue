<template>
  <button @click="handleLogin">Login</button>
  <button @click="handleOtherAPI">cookie test</button>

  <NuxtLinkLocale to="/private">To private page</NuxtLinkLocale>
</template>

<script setup lang="ts">
const handleLogin = () => {
  // $fetch('/api/login', {
  $fetch('http://localhost:3001/api/login', {
    method: 'POST',
    credentials: 'include',
  })
    .then(res => {
      console.log(res)
    })
    .then(res => {
      console.log(res)
    })
}

const handleOtherAPI = () => {
  $fetch('http://localhost:3001/api/cookie-test', {
    method: 'GET',
    credentials: 'include',
  })
    .then(res => {
      console.log('== success ==', res)
    })
    .then(res => {
      console.log(res)
    })
}
</script>

<style scoped></style>
