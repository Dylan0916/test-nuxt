<template>
  <div>
    <form v-show="type === 1" @submit="onSubmit">
      <input name="email" v-model="email" type="email" />
      <span>{{ errors.email }}</span>
      <hr />
      <input name="password" v-model="password" type="password" />
      <span>{{ errors.password }}</span>
      <hr />
      <button :disabled="isLoading">Submit{{ isLoading ? ' (loading...)' : '' }}</button>
    </form>

    <button v-if="type === 2" @click="onBack">Back</button>
  </div>
</template>

<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as zod from 'zod'

const validationSchema = toTypedSchema(
  zod.object({
    email: zod.string().min(1, { message: 'This is required' }),
    password: zod.string().min(1, { message: 'This is required' }),
  })
)
const { handleSubmit, errors, defineField, meta } = useForm({
  validationSchema,
})
const [email] = defineField('email', () => ({ props: { test: 123 } }))
const [password] = defineField('password')

const type = ref<1 | 2>(1)
const isLoading = ref(false)

watchEffect(() => {
  console.log('== meta ==', meta.value, meta.value.pending)
})

function sleep(time: number) {
  const { promise, resolve } = Promise.withResolvers()

  setTimeout(resolve, time)

  return promise
}

const onSubmit = handleSubmit(async _values => {
  isLoading.value = true
  await sleep(2000)
  isLoading.value = false
  type.value = 2
})

function onBack() {
  type.value = 1
  console.log('== onBack meta ==', meta.value)
}
</script>
