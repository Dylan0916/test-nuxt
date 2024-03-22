export const useDualAsyncData = (async (...args) => {
  // @ts-ignore: 有 "A spread argument must either have a tuple type or be passed to a rest parameter." type error，看起來是 TS 判斷問題，先忽略。
  const asyncData = await useAsyncData(...args);
  const { refresh } = asyncData;

  tryOnMounted(() => {
    args[0]();
  });

  return asyncData;
}) as typeof useAsyncData;
