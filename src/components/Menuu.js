import React from "react";
import { useState } from "react";
import ItemCard from "./ItemCard";
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import { IconContext } from "react-icons";

const Menuu = ({ menu }) => {
  const MenuitemsCards = menu?.card?.card?.itemCards;

   // console.log(MenuitemsCards)
  const [isVisible, setIsVisible] = useState("false");

  // menu section

  return (
    <>
      <div>
        <div>
          <h3>
            {menu?.card?.card?.title}

            <span> {menu?.card?.card?.itemCards?.length} </span>
          </h3>
          {/* drop down an up button  */}

          {MenuitemsCards && isVisible == "true" && (
            <button  onClick={() => setIsVisible("false")}>
              <IconContext.Provider value={{ size: "1.5em" }}>
                <div >
                  <BsCaretDown />
                </div>
              </IconContext.Provider>
            </button>
          )}

          {MenuitemsCards && isVisible == "false" && (
            <button  onClick={() => setIsVisible("true")}>
              <IconContext.Provider value={{ size: "1.5em" }}>
                <div >
                  <BsCaretUp />
                </div>
              </IconContext.Provider>
            </button>
          )}
        </div>

        {isVisible == "false" &&
          MenuitemsCards?.map((menuitem, index) => {
            key = { index };

            return (
              <>
                <ItemCard fooditem={menuitem}></ItemCard>
              </>
            );
            {
              /* all items of retaurent  */
            }
          })}
      </div>
    </>
  );
};

export default Menuu;
