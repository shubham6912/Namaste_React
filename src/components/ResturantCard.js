import { CDN_URL } from "../utils/constants";
import fallbackImage from "url:../../public/fallback-food.png";

const ResturantCard = (props) => {
  const { name, locality, cuisines, cloudinaryImageId, avgRatingString } =
    props?.resData?.info ?? {};

  return (
    <div
      className="flex h-full flex-col overflow-hidden
      rounded-xl bg-white shadow-md transition-all duration-300
      hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Restaurant Image */}
      <img
        className="h-48 w-full object-cover"
        src={cloudinaryImageId ? CDN_URL + cloudinaryImageId : fallbackImage}
        alt={name}
        loading="lazy"
        onError={(e) => {
          if (e.currentTarget.getAttribute("src") !== fallbackImage) {
            e.currentTarget.src = fallbackImage;
          }
        }}
      />

      {/* Restaurant Details */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        {/* Restaurant Name */}
        <h2 className="line-clamp-2 text-lg font-bold text-ink">{name}</h2>

        {/* Cuisines */}
        <p className="line-clamp-2 text-sm text-muted">
          {cuisines?.join(", ")}
        </p>

        {/* Rating */}
        <div
          className="flex items-center gap-1 text-sm
          font-semibold text-success"
        >
          <span>★</span>
          <span>{avgRatingString}</span>
        </div>

        {/* Locality */}
        <p className="mt-auto text-sm text-secondary">{locality}</p>
      </div>
    </div>
  );
};

export default ResturantCard;
