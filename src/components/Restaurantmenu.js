import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import SimmerMenuCards from "./SimmerMenuCards";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurant(resId);

  const categories =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  if (restaurantInfo == null) {
    return <SimmerMenuCards />;
  }

  const {
    name,
    cuisines,
    areaName,
    avgRatingString,
    totalRatingsString,
    city,
    locality,
  } = restaurantInfo?.cards[0]?.card?.card?.info;

  const Info=restaurantInfo?.cards[0]?.card?.card?.info;

  return (
    <div className=" mt-4  w-3/4 mx-auto min-[320px]:w-auto">
      <div className=" text-xs mt-8 w-3/4  m-auto lg:px-10  sm:px-8 min-[300px]:px-0">
        <p>
          Home / {city} / {locality} / {name}
        </p>
      </div>

      <div className=" flex  justify-around   items-center py-5 text-center  min-[320px]:gap-2">
        <div className=" px-2  min-[350px]:px-1   ">
          <h3 className="  font-sans  text-2xl font-medium min-[320px]:text-xl">
            {" "}
            {name}
          </h3>

          <h3 className=" font-sans ">{cuisines.join(" ,")}</h3>

          <h3 className="  font-sans ">
            {" "}
            {areaName} , {Math.round(Info?.sla.lastMileTravel) / 1000} km
          </h3>
        </div>

        <div className=" border-2 rounded-md p-3 xl:p-3 md:p-2 sm:p-1 min-[310px]:p-1 bg-green-200">
          <h3 className="text-red-700"> {avgRatingString} ⭐ </h3>

          <hr></hr>
          <h3>{totalRatingsString}</h3>
        </div>
      </div>
      <hr className="w-2/3 m-auto h-2"></hr>

      <div className="  w-3/4 mx-auto  my-5">
        <h1 className="text-xl font-semibold sm:font-semibold min-[320px]:font-medium text-green-400">
          Menu
        </h1>
      </div>
    </div>
  );
};

export default RestaurantMenu;
