import Image from 'next/image';
import { RotateCcw } from 'lucide-react';

interface NoDataFoundProps {
  title?: string;
  message?: string;
  showReset?: boolean;
  onReset?: () => void;
  image?: string;
}

export default function NoDataFound({
  title = 'No Data Found',
  message = 'No matching results found.',
  showReset = true,
  onReset,
  image = '/no-results.svg'
}: NoDataFoundProps) {
  return (
    <div className="min-h-[50vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="relative w-48 h-48 mx-auto mb-8">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          {message}
        </p>
        {showReset && onReset && (
          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 
              rounded-lg hover:bg-orange-700 transition-colors group"
          >
            <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            Reset Filters
          </button>
        )}
      </div>
    </div>
  );
}