
import {  useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const ResturantMenu = () => {
 
  const { resId } = useParams();

  const resInfo = useRestaurantMenu (resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, areaName, costForTwo, cuisines } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  const menuItems =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];

  return (
    <div className="resturant-menu-container">
      <div className="resturant-details">
        <h2>{name}</h2>
        <h3>{areaName}</h3>
        <h3>{costForTwo}</h3>
        <h3>{cuisines.join(",")}</h3>
      </div>
      <div className="resturant-menu">
        {menuItems.map((item, index) => (
          <div key={index}>
            {item?.card?.card?.itemCards?.map((foodItem) => (
              <h4 key={foodItem?.card?.info?.id}>
                {foodItem?.card?.info?.name}
              </h4>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;
