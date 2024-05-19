// https://github.com/nuxt/nuxt/issues/14766
const assets = import.meta.glob('~/assets/**/*.svg', {
  eager: true,
  import: 'default',
})
export function useAsset(path: ComputedRef<string>): any {
  return computed(() => assets[`/assets/${path.value}`])
}
