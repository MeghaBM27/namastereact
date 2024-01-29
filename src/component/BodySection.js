import resList from "../utils/mockData";
import RestoCard from "../component/RestoCard";
import { useEffect, useState } from "react";
import Shimmerui from "./ShimmerUi";

const BodySection = () => {
  const [listOfResto, setListOfResto] = useState([]);
  // const [listOfResto, setListOfResto] = useState(resList);
  const [inputValue, setInputValue] = useState("");
  const [copyFilterList,setCopyFilterList]=useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.951311525581191&lng=77.69675016403198&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfResto(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setCopyFilterList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    // this is not an goog way we use optional chaining
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  // shimmerui
  if (listOfResto.length === 0) {
    return <Shimmerui />;
  }
 
  return (
    <div className="resto-conatiner">
      <div className="resto-search">
        <input
          placeholder="search resto"
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            console.log(inputValue);
          }}
        />

        <button
          onClick={() => {
            const filteredResto = listOfResto.filter((res) =>
              res.info.name.toLowerCase().includes(inputValue.toLowerCase())
            );
          
            setCopyFilterList(filteredResto)
          }}
        >
          search
        </button>
        <button
          className="top-resto-filter"
          onClick={() => {
            const updateList = resList.filter((resto) => {
              return resto.info.avgRating > 4;
            });
           
            setListOfResto(updateList);
            console.log(updateList);
          }}
        >
          Top Rated Resto
        </button>
      </div>

      <div className="resto-cards-container">
        {copyFilterList.map((restaurant) => (
          <RestoCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default BodySection;
