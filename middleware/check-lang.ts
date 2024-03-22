export default defineNuxtRouteMiddleware((to) => {
  const nuxtApp = useNuxtApp();
  const { $i18n } = nuxtApp;
  const { locale: routeLocale } = to.params;

  console.log({ routeLocale, locale: $i18n.locale.value });

  if (routeLocale !== $i18n.locale.value) {
    // $i18n.setLocaleCookie(routeLocale);
    $i18n.setLocale(routeLocale);
  }
});
