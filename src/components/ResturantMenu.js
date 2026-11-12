import { useEffect } from "react";
import { json, useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { BASE_URL } from "../utils/constants";
import { VERSION } from "../utils/constants";
import { LIST_MENU } from "../utils/constants";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(BASE_URL + VERSION + LIST_MENU + resId);
      const jsonData = await response.json();

      const resData = jsonData;

      setResInfo(resData);
    } catch (error) {
      console.error("Error fetching menu:", error.message);
    }
  };

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
