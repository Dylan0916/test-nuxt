import { presetIcons, presetAttributify, presetWind, presetWebFonts, defineConfig, transformerVariantGroup, transformerDirectives } from 'unocss'

const _cssIdRE = /\.(css|postcss|sass|scss|less|stylus|styl)($|\?)/

export default defineConfig({
  // content: { pipeline: { include: [], exclude: [/assets/styles/mainscss] } },
  presets: [
    presetIcons(),
    presetWind(),
    presetAttributify(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Roboto:400,500,700', 'Noto Sans TC'],
      },
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives({ enforce: 'pre' })],
})
