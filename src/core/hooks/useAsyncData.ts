import { useState, useEffect } from "react";

interface UseAsyncDataParams<T> {
  initialValue: T;
  fetchFunction: () => Promise<T>;
  dependencies: any[];
  preFetch?: () => boolean | void;
}

export const useAsyncData = <T>({
  initialValue,
  fetchFunction,
  dependencies = [],
  preFetch,
}: UseAsyncDataParams<T>) => {
  const [data, setData] = useState<T>(initialValue);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await fetchFunction();
      setData(result);
    } catch (err) {
      console.error("Hook Error:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (preFetch) {
      const shouldFetch = preFetch();
      if (shouldFetch === false) {
        setIsLoading(false);
        setError(null);
        return;
      }
    }

    fetchData();
  }, dependencies);

  return {
    data,
    setData,
    isLoading,
    setIsLoading,
    error,
    setError,
    refetch: fetchData,
  };
};
