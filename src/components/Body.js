import ResturantCard from "./ResturantCard";
import { resturantList } from "../utils/mockData";
const Body = () => {
  return (
    <div className="body-container">
      <div className="search"> Search</div>
      <div className="resturant-container">
        {
          resturantList.map((resturant) => (
            <ResturantCard key={resturant.info.id} resData={resturant} />
          )
        )
        }
      </div>
    </div>
  );
};

export default Body;