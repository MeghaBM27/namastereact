import { CDN_URL } from "../utils/constant";



const ItemList = ({ listData }) => {
  console.log(listData, "listdata");
  return (
    <div>
      {listData.map((items) => {
        return (
          <div className="flex justify-between align-middle border-b-2 mb-4">
            <div key={items.card.info.id} className=" my-3 w-9/12">
              <p className="font-bold">{items.card.info.name}</p>
              <p className="font-bold py-3">₹{items.card.info.price / 100}</p>
              <p className="text-sm pb-4 text-gray-500">
                {items.card.info.description}
              </p>
            </div>
            <div className=" w-1/12"> 
              <img src={CDN_URL + items.card.info.imageId}  className="w-[100%] rounded-lg" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
