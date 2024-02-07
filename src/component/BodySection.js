import resList from "../utils/mockData";
import RestoCard, { aggregateDiscount } from "../component/RestoCard";
import { useEffect, useState } from "react";
import Shimmerui from "./ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodySection = () => {
  const [listOfResto, setListOfResto] = useState([]);
  // const [listOfResto, setListOfResto] = useState(resList);
  const [inputValue, setInputValue] = useState("");
  const [copyFilterList, setCopyFilterList] = useState([]);

  const onlineStatus = useOnlineStatus();
  const RestoCardAggregateDiscount = aggregateDiscount(RestoCard);
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
    setCopyFilterList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

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

  if (onlineStatus === false) {
    return (
      <div>
        <h1>something went wrong please check your internet connection</h1>
      </div>
    );
  }

  return (
    <div className="m-5 p-5">
      <div className="flex items-center">
        <input
          className="border-spacing-2 shadow-sm py-2 px-5 border"
          placeholder="search resto"
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            console.log(inputValue);
          }}
        />

        <button
          className="bg-green-200 rounded-lg shadow-sm py-2 px-5 m-5"
          onClick={() => {
            const filteredResto = listOfResto.filter((res) =>
              res.info.name.toLowerCase().includes(inputValue.toLowerCase())
            );

            setCopyFilterList(filteredResto);
          }}
        >
          search
        </button>
        <button
          className="bg-purple-200 py-2 px-5 rounded-lg"
          onClick={() => {
            const updateList = resList.filter((resto) => {
              return resto.info.avgRating > 4;
            });
            setListOfResto(updateList);
          }}
        >
          Top Rated Resto
        </button>
      </div>

      <div className="flex flex-wrap">
        {copyFilterList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restomenu/" + restaurant.info.id}
          >
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <RestoCardAggregateDiscount resData={restaurant}/>
            ) : (
              <RestoCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodySection;
