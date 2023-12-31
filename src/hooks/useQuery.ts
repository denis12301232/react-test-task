import type { HTTPError } from 'ky';
import { useCallback, useState } from 'react';

export default function useQuery<
  T extends (...param: Parameters<T>) => ReturnType<T>,
>(request: T) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Awaited<ReturnType<T>> | null>(null);
  const [error, setError] = useState<HTTPError | null>(null);

  function query(...params: Parameters<T>) {
    setLoading(true);
    Promise.resolve(request(...params))
      .then((data) => setData(data))
      .catch((e: HTTPError) => setError(e))
      .finally(() => setLoading(false));
  }

  return { query: useCallback(query, []), loading, data, error };
}
