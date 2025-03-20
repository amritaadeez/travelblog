export default function Loading() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section Skeleton */}
      <div className="relative h-[60vh] bg-gray-200 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="h-12 w-64 bg-gray-300 rounded mb-4 mx-auto" />
            <div className="h-6 w-96 bg-gray-300 rounded mx-auto" />
          </div>
        </div>
      </div>

      {/* Content Sections Skeleton */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-20">
          <div className="h-10 w-48 bg-gray-200 rounded mb-12 mx-auto" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200" />
                <div className="p-6">
                  <div className="h-6 w-3/4 bg-gray-200 rounded mb-4" />
                  <div className="h-4 w-full bg-gray-200 rounded mb-2" />
                  <div className="h-4 w-2/3 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}