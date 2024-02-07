import Shimmerui from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useResoMenu from "../utils/useRestoMenu";
import MenuAccordion from "./MenuAccordion";
import { useState } from "react";

const RestoMenu = () => {
  const { resId } = useParams();
  const menuData = useResoMenu(resId);
const [showIndex,setShowIndex]=useState(null)
  if (menuData === null) {
    return <Shimmerui />;
  }

  const { name, cuisines } = menuData?.cards[0]?.card?.card?.info;
  const { itemCards } =
    menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  const accordionItems =
    menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (itemCategory) =>
        itemCategory?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="w-6/12 m-auto">
      <h1 className="font-bold text-xl my-2">{name}</h1>
      <p className="my-5">{cuisines.join(" ,")}</p>

      {accordionItems.map((category,index) => {
        return (
          <div> 
            <MenuAccordion accordionData={category?.card?.card} showItems={index === showIndex ? true :false} setShowIndex={()=>setShowIndex(index)}/>
          </div>
        );
      })}
    </div>
  );
};

export default RestoMenu;
