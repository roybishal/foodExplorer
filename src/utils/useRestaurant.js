import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
      }, []);
      
      async function getRestaurantInfo() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + resId
        );
        const json = await data.json();
        // console.log(json.data.cards[0].card.card.info);
        // console.log(
        //   json?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards[1]?.card
        //     .card
        // );
        // setrestaurant(json?.data?.cards[0]?.card?.card?.info);
        setRestaurant(json.data);
      }

      return restaurant;

}

export default useRestaurant;