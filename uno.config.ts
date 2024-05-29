import { defineConfig, transformerDirectives } from 'unocss'

const cssIdRE = /\.(css|postcss|sass|scss|less|stylus|styl)($|\?)/

export default defineConfig({
  // content: { pipeline: { include: [], exclude: [/assets/styles/mainscss] } },
  transformers: [transformerDirectives()],
})
