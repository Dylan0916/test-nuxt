export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return;

  if (to.path.endsWith('private')) {
    console.log('you should login-in');
    return navigateTo('/?redirect_url=test');
  }
  console.log({ to, from });
});
