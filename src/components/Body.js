import ResturantCard from "./ResturantCard";
import { resturantList } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  let [listOfResturants, setListOfResturants] = useState([]);

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9476696&lng=77.6891689&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await response.json();  
      setListOfResturants(jsonData?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error(error);
    }
  };

  if (listOfResturants.length === 0) {
       return <Shimmer/>;
  }

  return (
    <div className="body-container">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resturantList.filter(
              (res) => res.info.avgRating > 4.3,
            );
            setListOfResturants(filteredList);
          }}
        >
          Top Resturantants by Rating
        </button>
      </div>
      <div className="resturant-container">
        {listOfResturants.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
