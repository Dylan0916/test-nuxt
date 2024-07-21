import { defineStore } from 'pinia'

import { useWindowSize } from '@vueuse/core'

const useMainStore = defineStore(
  'main',
  () => {
    const counter = ref(0)
    const doubleCounter = computed(() => counter.value * 2)
    const increment = () => {
      counter.value++
    }

    const { width } = useWindowSize({
      initialWidth: 1440,
    })

    const isExtraLargeDesktop = computed(() => width.value >= 1440)

    return {
      counter,
      doubleCounter,
      increment,
      isExtraLargeDesktop,
    }
  },
  { persist: true }
)

export default useMainStore
