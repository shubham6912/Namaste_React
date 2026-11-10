import ResturantCard from "./ResturantCard";
import { resturantList } from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  let [listOfResturants,setListOfResturants] = useState(resturantList);
  return (
    <div className="body-container">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
           const filteredList= resturantList.filter(
            (res) => res.info.avgRating > 4.3
           );
           setListOfResturants(filteredList);
          }}>
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
