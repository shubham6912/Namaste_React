import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { VERSION } from "../utils/constants";
import { LIST_MENU } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

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
  return resInfo;
};

export default useRestaurantMenu;
