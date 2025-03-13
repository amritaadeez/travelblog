import { useState, useEffect } from 'react';

export const useImageOptimization = (src: string) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setLoading(false);
      setImageSrc(src);
    };

    return () => {
      img.onload = null;
    };
  }, [src]);

  return { imageSrc, loading };
};