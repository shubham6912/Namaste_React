import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { name,  locality, cuisines, cloudinaryImageId, avgRatingString } =
    props?.resData?.info;
  return (
    <div className="resturant-card">
      <img
        src={
          CDN_URL +
          cloudinaryImageId
        }
      ></img>
      <span>{name}</span>
      <span>{cuisines.join(",")}</span>
      <span>{avgRatingString}</span>
      <span>{locality}</span>
    </div>
  );
};

export default ResturantCard;