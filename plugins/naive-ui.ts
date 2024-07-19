// ref: https://github.com/07akioni/nuxtjs-naive-ui/issues/4#issuecomment-2194054675

import { setup } from '@css-render/vue3-ssr'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) {
    const { collect } = setup(nuxtApp.vueApp)
    nuxtApp.ssrContext!.head.push({
      style: () =>
        collect()
          .split('</style>')
          .map((block) => {
            const id = block.match(/cssr-id="(.+?)"/)?.[1]
            const style = (block.match(/>(.*)/s)?.[1] || '').trim()
            return {
              ['cssr-id']: id,
              innerHTML: style,
            }
          }),
    })
  }
})
