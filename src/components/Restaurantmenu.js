import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer"
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();  
  const restaurant=useRestaurant(resId);  

  const categories =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    if(restaurant == null) {
        return <Shimmer />
    }

    const { name, 
        cuisines, 
        areaName, 
        cloudinaryImageId,
        avgRatingString, 
        totalRatingsString, 
        city, 
        locality, }

        = restaurant?.cards[0]?.card?.card?.info;



  return (!restaurant) ? <Shimmer /> : (
    <div className="w-72 m-3 bg-gray-50 mb-10 rounded-3xl shadow-2xl p-6  hover:bg-gray-100  shadow-slate-300">
      <div>
        <h1>Restautant id: {resId}</h1>
        <p>Home / {city} / {locality} / {name}</p>
        <h2>{name}</h2>
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h3>{areaName}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{avgRatingString} ⭐ </h3>
        <h3>{totalRatingsString} </h3>
        <h3>{restaurant.costForTwoMessage}</h3>
      </div>
      <div>
        
      </div>
    </div>

  );
};

export default RestaurantMenu;
