// import useMainStore from '@/stores/useMainStore';

export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
      //   store: useMainStore($pinia),
    },
  }
})
