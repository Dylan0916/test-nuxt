export default defineNuxtRouteMiddleware((to, from) => {
  return abortNavigation({
    statusCode: 403,
    message: 'nonono',
  })
})
