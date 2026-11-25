const Shimmer = () => {
  return (
    <div
      className="grid grid-cols-1 gap-6 px-4 py-8
        sm:grid-cols-2 md:grid-cols-3
        xl:grid-cols-4 2xl:grid-cols-5
        md:px-8 lg:px-12"
      role="status"
      aria-label="Loading restaurants"
    >
      {Array.from({ length: 10 }, (_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl bg-white
            shadow-md motion-safe:animate-pulse"
          aria-hidden="true"
        >
          {/* Restaurant Image Placeholder */}
          <div className="h-48 w-full bg-gray-200"></div>

          {/* Restaurant Details Placeholder */}
          <div className="flex flex-col gap-3 p-4">

            {/* Restaurant Name */}
            <div className="h-5 w-3/4 rounded bg-gray-200"></div>

            {/* Cuisines */}
            <div className="h-4 w-full rounded bg-gray-200"></div>

            {/* Rating */}
            <div className="h-4 w-1/4 rounded bg-gray-200"></div>

            {/* Locality */}
            <div className="h-4 w-1/2 rounded bg-gray-200"></div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;