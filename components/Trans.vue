<template>
  <render />
</template>

<script setup lang="ts">
import { Fragment } from 'vue'
import { type NamedValue } from 'vue-i18n'

type Components = {
  type: string | Component
  props?: Record<string, unknown>
}

interface Props {
  i18nKey: string
  components: Record<string, Components>
  values?: Record<string, PropertyKey> | PropertyKey[]
}

const props = withDefaults(defineProps<Props>(), { values: () => ({}) })

const { t } = useI18n()

const render = computed(() => {
  const result = []
  const i18nText = t(props.i18nKey, props.values as NamedValue)
  const findTagAndTextRegex = /<([^>]+)>(.+?)<\/[^>]+>/g
  const splittedAry = i18nText.split(findTagAndTextRegex)

  for (let i = 0; i < splittedAry.length; i++) {
    if (splittedAry[i] in props.components) {
      const theComponent = props.components[splittedAry[i]]

      result.push(h(theComponent.type, theComponent.props, splittedAry[++i]))
      continue
    }

    result.push(splittedAry[i])
  }

  return h(Fragment, null, result)
})
</script>
