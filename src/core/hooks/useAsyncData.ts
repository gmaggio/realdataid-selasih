import { useState, useEffect } from "react";

interface UseAsyncDataParams<T> {
  initialValue: T;
  fetchFunction: () => Promise<T>;
  dependencies: any[];
  entityName?: string;
  preFetch?: () => boolean | void;
}

export const useAsyncData = <T>({
  initialValue,
  fetchFunction,
  dependencies = [],
  entityName,
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
      const message = `Failed to fetch ${entityName && 'data'}: ` +
        `${(err instanceof Error ? (": " + err.message) : '.')}`;
      console.error("⚠️ " + message);
      setError(message);
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
