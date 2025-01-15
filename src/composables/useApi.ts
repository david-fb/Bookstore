// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useApi<T>(endpoint: string, options: any = {}) {
  const config = useRuntimeConfig();

  // Return just the fetch call instead of the whole useFetch response
  return $fetch<T>(`${config.public.apiBase}${endpoint}`, {
    ...options,
    headers: {
      ...(options.headers || {}),
      'Content-Type': 'application/json',
    },
  });
}
