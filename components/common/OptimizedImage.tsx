'use client';
import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}

export default function OptimizedImage({ src, alt, className, fill, priority }: OptimizedImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      className={`
        ${className}
        ${isLoading ? 'blur-sm grayscale' : 'blur-0 grayscale-0'}
        transition-all duration-300
      `}
      onLoadingComplete={() => setLoading(false)}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}