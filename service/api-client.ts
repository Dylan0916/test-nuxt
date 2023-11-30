import { type FetchOptions } from 'ofetch';

export const createApiClient = (options?: FetchOptions) => {
  return $fetch.create({
    baseURL: '/',
    credentials: 'include',
    onRequest({ options }) {
      options.headers = {
        'Accept-Language': 'zh-TW',
        ...options.headers,
      };
    },
    // onRequestError({ request, options, error }) {},
    // onResponse({ request, options, response }) {},
    onResponseError(context) {},
    ...options,
  });
};

let client: ReturnType<typeof createApiClient>;

const useApiClient = () => {
  if (!client) {
    client = createApiClient();
  }
  return client;
};

export default useApiClient;
