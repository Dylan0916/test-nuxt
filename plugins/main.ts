// import useMainStore from '@/stores/useMainStore';

export default defineNuxtPlugin(({ $pinia: _$pinia }) => {
  return {
    provide: {
      //   store: useMainStore($pinia),
    },
  }
})
