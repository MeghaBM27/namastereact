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
      <div className="resto-single-card">
        <img
          alt="resto-food"
          src={CDN_URL
            +
            cloudinaryImageId
          }
        />
        <div className="resto-details">
          <h4>{name}</h4>
          <div className="resto-rating">
            <img
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


  export default RestoCard;
  