import { useEffect } from "react";

const ResturantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);


const fetchMenu = async () => {
  try {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9476696&lng=77.6891689&restaurantId=285473"
    );

    console.log("Status:", response.status);
    console.log(
      "Content-Type:",
      response.headers.get("content-type")
    );

    if (response.status === 202) {
      console.warn(
        "Swiggy API returned 202. The request may be challenged by AWS WAF."
      );
      return;
    }

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
      throw new Error("Response is not JSON");
    }

    const jsonData = await response.json();

    console.log("Restaurant Menu Data:", jsonData);
  } catch (error) {
    console.error("Error fetching menu:", error.message);
  }
};


  return <h1>Restaurant Menu</h1>;
};

export default ResturantMenu;
