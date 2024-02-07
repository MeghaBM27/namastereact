import { useState } from "react";
import ItemList from "./ItemList";

const MenuAccordion = ({ accordionData,showItems,setShowIndex }) => {
const onShowHide =()=>{
  setShowIndex()
}

  return (
    <div className="border-b-2 my-5 p-5 shadow-lg cursor-pointer" onClick={onShowHide}>
      <div className="flex justify-between  ">
        <h2 className="font-bold">
          {accordionData.title} ({accordionData.itemCards.length})
        </h2>
        <p>🔻</p>
       
      </div>
      <div>
        {showItems && <ItemList  listData={accordionData?.itemCards}/>}
      
      </div>
    
    </div>
  );
};

export default MenuAccordion;
