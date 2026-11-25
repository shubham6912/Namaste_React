import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const ResturantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, areaName, costForTwo, cuisines } =
    resInfo?.data?.cards?.[2]?.card?.card?.info ?? {};

  const menuItems =
    resInfo?.data?.cards?.[4]?.groupedCard
      ?.cardGroupMap?.REGULAR?.cards ?? [];

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 md:px-6">

      {/* Restaurant Details */}
      <div className="mb-8 rounded-2xl border border-line
        bg-white p-5 shadow-sm md:p-8">

        <h1 className="mb-3 text-2xl font-bold
          text-ink md:text-3xl">
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
        {menuItems.map((item, index) => (
          <RestaurantCategory
            key={index}
            category={item?.card?.card}
            showItems={index === showIndex}
            onCategoryClick={() => setShowIndex(index)}
          />
        ))}
      </div>

    </main>
  );
};

export default ResturantMenu;