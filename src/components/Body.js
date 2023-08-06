import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";



const Body = () => {
    const [allRestaurants, setAllRestaurants]= useState([]);
    const [filteredRestaurants, setFilteredRestaurants]= useState([]);
    const [searchText, setSearchText]= useState("");

    useEffect(() => {
        getRestaurants();
    },[]);

    async function getRestaurants(){
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.488300272096538&lng=88.32804770688476&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
         //console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
         //console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);       
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const isOnline = useOnline();

    if(!isOnline) {
        return <h1> 🔴 Offline, Please Check Your Internet Connection!!</h1>
    }

    if(!allRestaurants) return null;


    return (allRestaurants?.length === 0) ? <Shimmer /> : (
        <>
        
        <div className="p-3 bg-pink-50 my-5">
            <input
             type="text"
             className="focus:bg-slate-100 p-2 m-2"
             placeholder="search"
             value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
           />

           <button 
             className="p-2 m-2 bg-pink-700 text-white rounded-md"
              onClick={() => {
            const data = filterData(searchText,allRestaurants);
              setFilteredRestaurants(data);
             }}
           >
            search
           </button>
        </div>
        <div className="flex flex-wrap m-2 justify-center " >
            {filteredRestaurants.map((restaurant) => {
                return (
                    <Link to={"restaurant/" + restaurant?.info?.id}
                    key={restaurant?.info?.id}>
                    <RestaurantCard resData={restaurant?.info}  />
                    </Link>

                )
                 
            })}
            


        </div>
        </>

    )
}

export default Body;