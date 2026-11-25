import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ResturantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    areaName,
    costForTwo,
    cuisines,
  } = resInfo?.data?.cards?.[2]?.card?.card?.info ?? {};

  const menuItems =
    resInfo?.data?.cards?.[4]?.groupedCard
      ?.cardGroupMap?.REGULAR?.cards ?? [];

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 md:px-6">

      {/* Restaurant Details */}
      <div className="mb-8 rounded-2xl border border-line
        bg-white p-5 shadow-sm md:p-8">

        <h1 className="mb-3 text-2xl font-bold text-ink
          md:text-3xl">
          {name}
        </h1>

        <p className="mb-2 text-sm text-muted">
          {areaName}
        </p>

        <p className="mb-2 font-semibold text-ink">
          {costForTwo}
        </p>

        <p className="text-sm text-secondary">
          {cuisines?.join(", ")}
        </p>

      </div>

      {/* Menu Heading */}
      <h2 className="mb-5 text-2xl font-bold text-ink">
        Restaurant Menu
      </h2>

      {/* Menu Categories */}
      <div className="space-y-5">

        {menuItems.map((item, index) => {
          const category = item?.card?.card;
          const foodItems = category?.itemCards ?? [];

          if (foodItems.length === 0) {
            return null;
          }

          return (
            <section
              key={index}
              className="overflow-hidden rounded-xl border
                border-line bg-white shadow-sm"
            >

              {/* Category Heading */}
              {category?.title && (
                <h3 className="border-b border-line bg-gray-50
                  px-5 py-4 text-lg font-bold text-ink">
                  {category.title} ({foodItems.length})
                </h3>
              )}

              {/* Food Items */}
              <div className="divide-y divide-line">

                {foodItems.map((foodItem) => (
                  <h4
                    key={foodItem?.card?.info?.id}
                    className="px-5 py-4 font-medium text-ink
                      transition-colors hover:bg-primary/5
                      hover:text-primary"
                  >
                    {foodItem?.card?.info?.name}
                  </h4>
                ))}

              </div>
            </section>
          );
        })}

      </div>
    </main>
  );
};

export default ResturantMenu;