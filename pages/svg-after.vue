<template>
  <div>
    <h3>svg-after</h3>
    <div class="flex flex-wrap gap-2 bg-gray">
      <div v-for="(svg, path) in iconSvgMap" :key="path" class="flex flex-col items-center">
        <div class="size-30 text-pink">
          <component :is="svg" />
        </div>
        {{ getSvgName(path) }}
      </div>
    </div>
    <hr />
    <div class="flex flex-wrap gap-2">
      <div v-for="(svg, path) in otherSvgMap" :key="path" class="flex flex-col items-center">
        <div class="size-30 text-pink">
          <component :is="svg" />
        </div>
        {{ getSvgName(path) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const iconSvgPromises = import.meta.glob<any>('@/assets/icons/*.svg')
const iconSvgMap = getSvgMap(iconSvgPromises)

const otherSvgPromises = import.meta.glob<any>('@/assets/images/**/*.svg')
const otherSvgMap = getSvgMap(otherSvgPromises)

console.log(iconSvgPromises)

function getSvgMap(svgPromise: any) {
  return Object.entries(svgPromise).reduce<any>((acc, [key, svg]) => ({ ...acc, [key]: defineAsyncComponent(svg as any) }), {})
}

function getSvgName(path: any) {
  return path.match(/\/.+\/(.+\.svg)/)?.[1].replace('.svg', '')
}
</script>
