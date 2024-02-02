import Shimmerui from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useResoMenu from "../utils/useRestoMenu";

const RestoMenu = () => {
  const { resId } = useParams();
  const menuData = useResoMenu(resId);

  if (menuData === null) {
    return <Shimmerui />;
  }

  const { name } = menuData?.cards[0]?.card?.card?.info;
  const { itemCards } =
    menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div>
      <h1>{name}</h1>
      {itemCards.map((items) => {
        return (
          <>
            <li key={items.card.info.id}>{items.card.info.name}</li>
          </>
        );
      })}
    </div>
  );
};

export default RestoMenu;
