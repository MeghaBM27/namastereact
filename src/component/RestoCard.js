import { CDN_URL } from "../utils/constant";
import { RATING_URL } from "../utils/constant";

const RestoCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      avgRating,
      deliveryTime,
      costForTwo,
      cuisines,
    } = resData?.info;
  
  
    return (
      <div className="w-[300px]  m-5 hover:bg-slate-100 ">
        <img  className="h-[300px] w-[100%] rounded-lg"
          alt="resto-food"
          src={CDN_URL
            +
            cloudinaryImageId
          }
        />
        <div className="resto-details">
          <h4 className="font-bold text-xl py-4">{name}</h4>
          <div className="flex items-center ">
            <img className="w-4"
              alt="rating-logo"
              src={RATING_URL}
            />
            <h4>
              {avgRating}
              <span>{deliveryTime}</span>
            </h4>
          </div>
          <h4>{costForTwo}</h4>
          <p className="resto-cuisines">{cuisines.join(", ")}</p>
        </div>
      </div>
    );
  };


  export const aggregateDiscount =(RestoCard)=>{
    return(props)=>{
      const { resData } = props;
      const { aggregatedDiscountInfoV3} =resData?.info;
      return(
        <div>
          <h2 className="bg-black text-white m-5 absolute font-bold p-2">{aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}</h2>
     
          <RestoCard {...props}/>
        </div>
      )
    }
  }

  export default RestoCard;
  