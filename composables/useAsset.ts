// https://github.com/nuxt/nuxt/issues/14766
// const assets = import.meta.glob('~/assets/**/*.svg', {
//   eager: true,
//   import: 'default',
// })
const assets = import.meta.glob<Component>('~/assets/**/*.svg', {
  import: 'default',
})

export function useAsset(path: ComputedRef<string>): any {
  return computed(() => defineAsyncComponent(assets[`/assets/${path.value}`]))
}
