import useApiClient from './api-client'

export async function getInfo(args = {}) {
  const api = useApiClient()

  return api('/api/info', args)
}
