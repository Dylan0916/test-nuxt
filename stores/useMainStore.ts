import { defineStore } from 'pinia';

const useMainStore = defineStore(
  'main',
  () => {
    const counter = ref(0);
    const doubleCounter = computed(() => counter.value * 2);
    const increment = () => {
      counter.value++;
    };

    return {
      counter,
      doubleCounter,
      increment,
    };
  },
  { persist: true }
);

export default useMainStore;
