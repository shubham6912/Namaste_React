import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { VERSION } from "../utils/constants";
import { LIST_RESTAURANT } from "../utils/constants";
const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredResturantList, setFilteredResturantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL + VERSION + LIST_RESTAURANT);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const jsonData = await response.json();

      const restaurants =
        jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setListOfResturants(restaurants);
      setFilteredResturantList(restaurants);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
      setError("Unable to load restaurants. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const filteredList = filteredResturantList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase()),
    );

    setListOfResturants(filteredList);
  };

  const handleTopRated = () => {
    const filteredList = filteredResturantList.filter(
      (res) => Number(res.info.avgRating) > 4.3,
    );

    setListOfResturants(filteredList);
  };

  if (loading) {
    return <Shimmer />;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="body-container">
      {/* Search and Filter Section */}
      <div className="filter-container">
        <div className="search-container">
          <input
            className="search-input"
            type="search"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>

        <button className="filter-btn" onClick={handleTopRated}>
          Top Restaurants by Rating
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="resturant-container">
        {listOfResturants.length > 0 ? (
          listOfResturants.map((resturant) => (
            <Link
              key={resturant.info.id}
              to={"/restaurant/" + resturant.info.id}
            >
              <ResturantCard resData={resturant} />
            </Link>
          ))
        ) : (
          <p>No restaurants found.</p>
        )}
      </div>
    </div>
  );
};

export default Body;
