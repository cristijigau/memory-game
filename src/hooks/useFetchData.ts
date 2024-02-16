import { useEffect, useState } from 'react';

const useFetchData = <ReturnType>(url: string, refetchTrigger: boolean) => {
  const [data, setData] = useState<ReturnType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let ignore = false;

    const fetchCatImages = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = (await response.json()) as ReturnType;

        if (!ignore) {
          setData(data);
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    void fetchCatImages();

    return () => {
      ignore = true;
    };
  }, [url, refetchTrigger]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
