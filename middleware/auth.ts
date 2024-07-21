export default defineNuxtRouteMiddleware((_to, _from) => {
  return abortNavigation({
    statusCode: 403,
    message: 'nonono',
  })
})
