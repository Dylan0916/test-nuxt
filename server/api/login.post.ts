import { setCookie } from '@/utils'

export default defineEventHandler(async event => {
  const body = await readBody(event)

  const resp = await $fetch.raw('http://localhost:3001/api/login', {
    method: 'POST',
    credentials: 'include',
    body,
  })

  setCookie(resp.headers.get('set-cookie') || '')

  return resp._data
})
