import { useEffect, useState } from 'react';
import { ImageData } from '../common/types';

const useFetchCatImages = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let ignore = false;

    const fetchCatImages = async () => {
      try {
        const response = await fetch(
          'https://api.thecatapi.com/v1/images/search?limit=10',
        );

        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }

        const images = (await response.json()) as ImageData[];

        if (!ignore) {
          setImages(images);
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
  }, []);

  return {
    images,
    loading,
    error,
  };
};

export default useFetchCatImages;
