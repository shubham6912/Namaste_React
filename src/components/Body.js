import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { BASE_URL, VERSION, LIST_RESTAURANT } from "../utils/constants";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredResturantList, setFilteredResturantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLabel(ResturantCard);

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
        jsonData?.data?.data?.cards?.[1]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants ?? [];

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

  if (!onlineStatus) {
    return (
      <h1 className="p-10 text-center text-xl font-semibold text-error">
        Looks like you are offline. Please check your internet connection.
      </h1>
    );
  }

  if (error) {
    return <p className="p-10 text-center font-medium text-error">{error}</p>;
  }

  return (
    <main className="min-h-screen px-4 py-8 md:px-8 lg:px-12">
      {/* Search and Filter Section */}
      <div
        className="mb-8 flex flex-col gap-4
        md:flex-row md:items-center md:justify-between"
      >
        {/* Search Container */}
        <div className="flex w-full max-w-[650px] items-center gap-3">
          <input
            className="min-w-0 flex-1 rounded-lg border border-line
              bg-white px-4 py-3 text-sm outline-none
              placeholder:text-muted transition-colors
              focus:border-primary focus:ring-2
              focus:ring-primary/20"
            type="search"
            aria-label="Search restaurants"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="rounded-lg bg-primary px-5 py-3
              text-sm font-semibold text-white transition
              hover:bg-primary-hover active:scale-95"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* Top Rated Button */}
        <button
          className="rounded-lg border border-line bg-white
            px-5 py-3 text-sm font-semibold text-ink
            transition hover:border-primary hover:bg-primary
            hover:text-white active:scale-95"
          onClick={handleTopRated}
        >
          Top Restaurants by Rating
        </button>
      </div>

      {/* Restaurant Grid */}
      <div
        className="grid grid-cols-1 gap-6
        sm:grid-cols-2 md:grid-cols-3
        xl:grid-cols-4 2xl:grid-cols-5"
      >
        {listOfResturants.length > 0 ? (
          listOfResturants.map((resturant) => (
            <Link
              className="block h-full min-w-0"
              key={resturant.info.id}
              to={"/restaurant/" + resturant.info.id}
            >
              {resturant.info.avgRatingString < "4.3" ? (
                <RestaurantCardPromoted resData={resturant} />
              ) : (
                <ResturantCard resData={resturant} />
              )}
            </Link>
          ))
        ) : (
          <p className="col-span-full py-10 text-center text-muted">
            No restaurants found.
          </p>
        )}
      </div>
    </main>
  );
};

export default Body;
