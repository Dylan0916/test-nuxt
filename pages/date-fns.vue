<template>
  <div>
    <button @click="onClick">Click</button>
    <button @click="handleHeavyCal">heavy cal</button>
    <div>Duration 1: {{ duration1 }}</div>
    <div>Duration 2: {{ duration2 }}</div>
  </div>
</template>

<script lang="ts" setup>
const { duration: duration1, startCountDownTimer: startCountDownTimer1 } = useCountDownTimer()
const { duration: duration2, startCountDownTimer: startCountDownTimer2 } = useCountDownTimer(true)

function onClick() {
  startCountDownTimer1(300)
  startCountDownTimer2(300)
}

function handleHeavyCal() {
  const start = Date.now()
  for (let i = 0; i < 3000000000; i++) {
    Math.sqrt(i)
  }
  console.log('Heavy cal duration:', Date.now() - start)
}
</script>
