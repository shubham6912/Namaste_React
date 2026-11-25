import { CDN_URL } from "../utils/constants";
import fallbackImage from "url:../../public/fallback-food.png";

const RestaurantCategory = ({ category, showItems, onCategoryClick }) => {
  const { title, itemCards = [] } = category ?? {};

  if (itemCards.length === 0) {
    return null;
  }
  const handleClick = () => {
    console.log(title + " clicked");
    onCategoryClick();
  };
  return (
    <section
      className="overflow-hidden rounded-xl border
      border-line bg-white shadow-sm"
    >
      {/* Category Heading */}
      {title && (
        <h3 className="border-b border-line bg-gray-50">
          <button
            type="button"
            onClick={handleClick}
            aria-expanded={showItems}
            className="flex w-full cursor-pointer items-center
        justify-between px-5 py-4 text-left
        text-lg font-bold text-ink"
          >
            <span>
              {title} ({itemCards.length})
            </span>
            <span>{showItems ? "▲" : "▼"}</span>
          </button>
        </h3>
      )}

      {/* Food Items */}
      {showItems && (
        <div className="divide-y divide-line">
          {itemCards.map((foodItem) => {
            const { id, name, description, imageId, price, defaultPrice } =
              foodItem?.card?.info ?? {};

            const itemPrice = price ?? defaultPrice;

            return (
              <div
                key={id}
                className="flex items-start justify-between
                gap-4 p-5 transition-colors hover:bg-primary/5"
              >
                {/* Food Information */}
                <div className="min-w-0 flex-1">
                  <h4
                    className="text-base font-bold
                  text-ink md:text-lg"
                  >
                    {name}
                  </h4>

                  {itemPrice != null && (
                    <p className="mt-1 font-semibold text-ink">
                      ₹{itemPrice / 100}
                    </p>
                  )}

                  {description && (
                    <p
                      className="mt-2 line-clamp-3 text-sm
                    leading-relaxed text-muted"
                    >
                      {description}
                    </p>
                  )}
                </div>

                {/* Food Image */}
                <div className="shrink-0">
                  <img
                    className="h-24 w-24 rounded-xl
                    object-cover md:h-32 md:w-32"
                    src={imageId ? CDN_URL + imageId : fallbackImage}
                    alt={name || "Food item"}
                    loading="lazy"
                    onError={(e) => {
                      if (
                        e.currentTarget.getAttribute("src") !== fallbackImage
                      ) {
                        e.currentTarget.src = fallbackImage;
                      }
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default RestaurantCategory;
