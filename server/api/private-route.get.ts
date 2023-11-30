import { getCookie } from '@/utils';

export default defineEventHandler(async () => {
  const resp = await $fetch.raw('http://localhost:3001/api/private-route', {
    method: 'GET',
    headers: {
      cookie: getCookie(),
    },
  });

  return resp;
});
