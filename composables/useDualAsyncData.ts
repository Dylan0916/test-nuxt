export const useDualAsyncData = (async (...args: any[]) => {
  const asyncData = await useAsyncData(...args)

  tryOnMounted(() => {
    args[0]()
  })

  return asyncData
}) as typeof useAsyncData
